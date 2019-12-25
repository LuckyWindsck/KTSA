from flask import Flask, request, session, redirect, render_template
from flask_restful import Resource, Api
from flask_cors import CORS
import json
import random
from pymongo import MongoClient
import hashlib
import os
import binascii
from flask import jsonify
import uuid

app = Flask(__name__)
api = Api(app)
CORS(app)
client = MongoClient('localhost', 27017)
db = client['ktsa']


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
    password = data['password']
    user = users.find_one({"username":data['username']})
    if user and verify_password(user['password'], password):
        return True
    return False

class News(Resource):   
    def get(self, news_id):
        news = db.news
        cursor = news.find_one({"id": news_id}, {'_id': False})
        return json.dumps(cursor)

    def put(self, news_id):
        news = db.news
        data = bytes_to_object(request.data)
        news.update_one({"id":news_id}, data)
        return "Succesfully Updated News"

    def delete(self, news_id):
        news = db.news
        news.delete_one({"id": news_id})
        return "Successfully deleted news with the id of {}".format(news_id)

class Events(Resource):
    def get(self, events_id):
        events = db.events
        cursor = events.find_one({"id": events_id}, {'_id': False})
        return json.dumps(cursor)

    def put(self, events_id):
        events = db.events
        data = bytes_to_object(request.data)
        events.update_one({"id": events_id}, data)
        return "Succesfully added a new event"

    def delete(self, events_id):
        events = db.events
        events.delete_one({"id": events_id})
        return "Succesfully deleted event with the id of {}".format(events_id)

api.add_resource(News, '/api/news/<news_id>')
api.add_resource(Events, '/api/events/<events_id>')
   
@app.route('/api/news', methods=['GET'])
def get_news():
    collection = db.news
    all_news = []
    cursor = collection.find({}, {'_id': False})
    for document in cursor:
        all_news.append(document)
    return jsonify(news=all_news)

@app.route('/api/news', methods=['POST'])
def post_news():
    news = db.news
    data = bytes_to_object(request.data)
    news.insert_one(data)
    return "Succesfully added a news"   

@app.route('/api/events', methods=['GET'])
def get_events():
    collection = db.events
    all_events = []
    cursor = collection.find({}, {'_id': False})
    for document in cursor:
        all_events.append(document)
    return jsonify(events=all_events)

@app.route('/api/events', methods=['POST'])
def post_events():
    events = db.events
    data = bytes_to_object(request.data)
    events.insert_one(data)
    return "Successfully added a event"

@app.route('/api/signup', methods=['POST'])
def signup():
    data = bytes_to_object(request.data)
    token = 'nawiatoiek'
    if data['token'] == token:
        hashed_password = hash_password(data['password'])
        db.login.insert_one({'username': data['username'], 'password': hashed_password})
    return 'Succesfully created a new admin'


@app.route('/api/signin', methods=['POST'])
def authenticate():
    data = bytes_to_object(request.data)
    if check_credentials(data):
        session['key'] = uuid.uuid1()
        session['username'] = data['username']
        return session['key']
    else:
        return 'Wrong Credentials!'



@app.route('/logout')
def logout():
    session.pop("username", None)
    return "Logged out"

if __name__ == "__main__":
    print(app.url_map)
    app.secret_key = os.urandom(12)
    app.run('0.0.0.0')