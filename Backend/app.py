from flask import Flask

from extensions import db, migrate
from routes.test import test

def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zdk0421ZDK.@localhost/workout'
  
  db.init_app(app)
  migrate.init_app(app)

  app.register_blueprint(test)

  return app