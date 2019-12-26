from flask import (
  Blueprint,
  jsonify,
)
from pymongo import MongoClient

# Init mongo client
client = MongoClient('mongodb://localhost:27017/')
try:
  client.admin.command('ismaster')
except ConnectionFailure:
  print("Server not available")

db = Blueprint('database', __name__)

@db.route('/', methods=['GET'])
def database_index():
  return jsonify(client.list_database_names())

@db.route('/<database_name>/', methods=['GET'])
def database_show(database_name):
  database = client[database_name]
  return jsonify(database.list_collection_names())

@db.route('/<database_name>/<collection_name>/', methods=['GET'])
def collection_index(database_name, collection_name):
  collection = client[database_name][collection_name]
  cursor = collection.find({}, {'_id': False})
  return jsonify(list(cursor))
