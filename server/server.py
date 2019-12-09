from flask import Flask
from flask import request
import json
import random
from pymongo import MongoClient
import hashlib
import os
import binascii
from flask import jsonify

app = Flask(__name__)
client = MongoClient('localhost', 27017)

db = client['ktsa']


@app.route('/api')
def index():
    return "Hello there"    

#Hash Salting Password
def hash_password(password):
    """Hash a password for storing."""
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    pwdhash = hashlib.pbkdf2_hmac('sha512', password.encode('utf-8'), 
                                salt, 100000)
    pwdhash = binascii.hexlify(pwdhash)
    return (salt + pwdhash).decode('ascii')
#Salt is removed  to verify if hash matches
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

def bytes_to_object(bytestring):
    string = bytestring.decode("utf-8")
    obj = json.loads(string)
    return obj


def check_credentials(data):
    users = db.login
    stored_password = hash_password(data['password'])
    user = users.find_one({"username":data['username']})
    if user and user['password'] == stored_password:
        return True
    return False

#----------------POST REQUESTS---------------------------------


@app.route('/api/signup', methods=['POST'])
def signup():
    data = bytes_to_object(request.data)
    token = 'nawiatoiek'
    if data['token'] == token:
        hashed_password = hash_password(data['password'])
        db.login.insert_one({'username': data['username'], 'password': hashed_password})
    return 'Succesfully created a new admin'

@app.route('/api/login', methods=['POST'])
def authenticate():
    data = bytes_to_object(request.data)
    if check_credentials(data):
        return True
    else:
        return False


@app.route('/api/add_news', methods=['POST'])
def add_news():
    raw_data = request.data
    data = bytes_to_object(raw_data)
    news = {
        "id": 0,
        "news_author": "",
        "news_title": "",
        "news_image": "",
        "news_content": "",
        "created_at": "",
        "updated_at": ""
    }
    news["id"] = data["id"]
    news["news_author"] = data["news_author"]
    news["news_title"] = data ["news_title"]
    news["news_image"] = data["news_image"]
    news["content"] = data["content"]
    news["created_at"] = data["created_at"]
    news["updated_at"] = data["updated_at"]
    print("inserted")
    db.news.insert_one(news)
    
    return "Successfuly added a news"

@app.route('/api/add_events', methods=['POST'])
def add_events():
    raw_data = request.data
    data = bytes_to_object(raw_data)
    db.events.insert_one(data)

#---------------------------GET REQUEST------------------------------

#Display all pages
@app.route('/api/display_news', methods=['GET'])
def display_news():
    collection = db.news
    all_news = []
    cursor = collection.find({}, {'_id': False})
    for document in cursor:
        all_news.append(document)
    return jsonify(news=all_news)

@app.route('/api/display_events', methods=['GET'])
def display_events():
    collection = db.events
    all_events = []
    cursor = collection.find({}, {'_id': False})
    for document in cursor:
        all_events.append(document)
    return all_events


#----------------------PUT REQUESTS----------------------------------
@app.route('/api/news', methods=['PUT'])
def update_news():
    news = db.news
    data = bytes_to_object(request.data)
    news.update_one({"id":data["id"]}, data)
    return "Succesfully Updated News"

@app.route('/api/events', methods=['PUT'])
def update_events():
    events = db.events
    data = bytes_to_object(request.data)
    events.update_one({"id": data["id"]}, data)
    return "Successfully Updated Events"


app.run('0.0.0.0')
