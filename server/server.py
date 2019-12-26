from blueprints import (
  api,
  database,
  events,
  news,
)
from flask import (
  Blueprint,
  Flask,
  jsonify,
)
from flask_jwt_extended import (
    JWTManager,
)

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Authorization,Content-Type')
  response.headers.add('Acceess-Control-Allow-Methods', 'GET,POST')
  return response

if __name__ == "__main__":
  app.debug = True
  app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
  app.config['JSON_AS_ASCII'] = False

  app.register_blueprint(api.api, url_prefix='/api')
  app.register_blueprint(database.db, url_prefix='/api/database')
  app.register_blueprint(events.events, url_prefix='/api/events')
  app.register_blueprint(news.news, url_prefix='/api/news')

  # Setup the Flask-JWT-Extended extension
  app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
  jwt = JWTManager(app)

  print(app.url_map)
  print()
  app.run('0.0.0.0')
