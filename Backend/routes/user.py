from turtle import update
from flask import Blueprint, request
from extensions import db

from models.user import User

user = Blueprint('user', __name__)

def format_user(user : User):
  return {
    'email' : user.email, 
    'password' : user.password, 
    'first_name' : user.first_name, 
    'last_name' : user.last_name, 
    'gender' : user.gender, 
    'age' : user.age
  }

@user.route('/user', methods=['POST'])
def post_user():
  email=request.json(['email'])
  password=request.json(['password'])
  first_name=request.json(['first_name'])
  last_name=request.json(['last_name'])
  gender=request.json(['gender'])
  age=request.json(['age'])
  user = User(email, password, first_name, last_name, gender, age)
  db.session.add(user)
  db.session.commit()
  return format_user(user)

@user.route('/user', methods=['GET'])
def get_users():
  users = User.query.all()
  user_list = []
  for user in users:
    user_list.append(format_user(user))
  return {'user_list' : user_list}

@user.route('/user/<id>', methods=['GET'])
def get_user(id):
  user = User.query.filter_by(id=id).one()
  user = format_user(user)
  return {'user' : user}

@user.route('user/<id>', methods=['DELETE'])
def delete_user(id):
  user = User.query.filter_by(id=id).one()
  db.session.delete(user)
  db.session.commit()
  return f'user id: {id} deleted'

@user.route('user/<id>', methods=['PUT'])
def update_user(id):
  pass
