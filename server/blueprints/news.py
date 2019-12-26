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

collection = client.ktsa.news

news = Blueprint('news', __name__)

@news.route('/', methods=['GET'])
def news_index():
  cursor = collection.find({}, {'_id': False})
  return jsonify(list(cursor))

@jwt_required
@news.route('/<int:news_id>', methods=['GET'])
def news_show(news_id):
  cursor = collection.find({'id': int(news_id)}, {'_id': False})
  return jsonify(list(cursor))

@jwt_required
@news.route('/', methods=['POST'])
def news_create():
  data = bytes_to_object(request.data)
  print(data['created_at'])
  number_of_news = collection.count()
  data["id"] = int(number_of_news) + 1
  collection.insert_one(data)
  return request.data

@jwt_required
@news.route('/<int:news_id>', methods=['DELETE'])
def news_destroy(news_id):
  collection.delete_one({"id": int(news_id)})
  return jsonify(None), 204
