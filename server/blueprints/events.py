from flask import (
  Blueprint,
  jsonify,
  request,
)
from flask_jwt_extended import jwt_required
from pymongo import MongoClient
import json

def bytes_to_object(bytestring):
  string = bytestring.decode("utf-8")
  return json.loads(string)

# Init mongo client
client = MongoClient('mongodb://localhost:27017/')
try:
  client.admin.command('ismaster')
except ConnectionFailure:
  print("Server not available")

collection = client.ktsa.events

events = Blueprint('events', __name__)

@events.route('/', methods=['GET'])
def events_index():
  cursor = collection.find({}, {'_id': False})
  return jsonify(list(cursor))

@jwt_required
@events.route('/<int:events_id>', methods=['GET'])
def events_show(events_id):
  cursor = collection.find({'id': int(events_id)}, {'_id': False})
  return jsonify(list(cursor))

@jwt_required
@events.route('/', methods=['POST'])
def events_create():
  data = bytes_to_object(request.data)
  number_of_documents = collection.count()
  data["id"] = int(number_of_documents) + 1
  print(data['created_at'])
  collection.insert_one(data)
  return request.data

@jwt_required
@events.route('/<int:events_id>', methods=['DELETE'])
def events_destroy(events_id):
  collection.delete_one({"id": int(events_id)})
  return jsonify(None), 204
