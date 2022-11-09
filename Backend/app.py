from flask import Flask
from flask_cors import CORS

from extensions import db, migrate
from routes.user import user
from routes.exercise import exercise
from routes.plan import plan
from routes.pr import pr

def create_app():
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zdk0421ZDK.@localhost/workout'
  
  db.init_app(app)
  migrate.init_app(app)

  app.register_blueprint(user, url_prefix="/user")
  app.register_blueprint(exercise, url_prefix="/exercise")
  app.register_blueprint(plan, url_prefix="/plan")
  app.register_blueprint(pr, url_prefix="/pr")

  CORS(app)
  return app