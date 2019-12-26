from flask import (
  Blueprint,
  jsonify,
  request
)
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
)
from pymongo import MongoClient
import binascii
import datetime
import hashlib

client = MongoClient('mongodb://localhost:27017/')
try:
  client.admin.command('ismaster')
except ConnectionFailure:
  print("Server not available")

#Salt is removed to verify if hash matches
def verify_password(stored_password, provided_password):
  """Verify a stored password against one provided by user"""
  salt = stored_password[:64]
  stored_password = stored_password[64:]
  pwdhash = hashlib.pbkdf2_hmac('sha512',
                                provided_password.encode('utf-8'),
                                salt.encode('ascii'),
                                100000)
  pwdhash = binascii.hexlify(pwdhash).decode('ascii')
  return pwdhash == stored_password

api = Blueprint('api', __name__)

@api.route('/', methods=['GET'])
def index():
  return 'Index of API'

# Provide a method to create access tokens. The create_access_token()
# function is used to actually generate the token, and you can return
# it to the caller however you choose.
@api.route('/login/', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400

    password = request.json.get('password', None)
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    user = client.ktsa.login.find_one({"username": username})    
    is_password_valid = verify_password(user["password"], password)
    if not user or not is_password_valid:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token), 200
