from flask import Flask
from flask_cors import CORS

from extensions import db, migrate
from routes.test import test
from routes.user import user

def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zdk0421ZDK.@localhost/workout'
  
  db.init_app(app)
  migrate.init_app(app)

  app.register_blueprint(test, url_prefix="/tests")
  app.register_blueprint(user, url_prefix="")

  CORS(app)
  return app