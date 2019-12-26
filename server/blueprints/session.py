from flask import (
  Blueprint,
  make_response,
  request,
  session,
)
from pymongo import MongoClient
import binascii
import hashlib

# Init mongo client
client = MongoClient('mongodb://localhost:27017/')
try:
  client.admin.command('ismaster')
except ConnectionFailure:
  print("Server not available")

session = Blueprint('session', __name__)

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

def check_credentials(data):
  user = client.ktsa.login.find_one({"username": data["username"]})
  is_user_exist = user is None
  is_password_valid = verify_password(user["password"], data["password"])
  return is_user_exist and is_password_valid

@session.route('/', methods=['POST'])
def login():
  # resp = make_response(request.json)
  # resp.set_cookie('somecookiename', 'I am cookie')
  # return resp
  if check_credentials(request.json):
    # session['username']
  # #     # session['key'] = secrets.token_urlsafe()
  # #     # session['username'] = username
  # #     # return  {"token": session['key'], "error": ""}
      return  {"token": "t", "error": ""}
  return {"token": "", "error": "Wrong Credentials"}

@session.route('/', methods=['DELETE'])
def logout():
  return 'logout'
