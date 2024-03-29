from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.user import User
import psycopg2

user = Blueprint('user', __name__)

def format_user(user):
  return {
    'id' : user.id, 
    'email' : user.email, 
    'password' : user.password, 
    'chest_cir' : user.chest_cir, 
    'waist_cir' : user.waist_cir, 
    'arm_cir' : user.arm_cir,
    'hip_cir' : user.hip_cir, 
    'body_fat' : user.body_fat,
    'height' : user.height, 
    'weight' : user.weight
  }

@user.route('/user', methods=['POST'])
def post_user():
  email=request.json['email']
  password=request.json['password']
  user = User(email, password)
  db.session.add(user)
  try:  
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return jsonify(user=None)
  return jsonify(user=format_user(user))

@user.route('/user', methods=['GET'])
def get_users():
  users = User.query.all()
  user_list = []
  for user in users:
    user_list.append(format_user(user))
  return {'user_list' : user_list}

@user.route('/user/<id>', methods=['GET'])
def get_user(id):
  user = User.query.get_or_404(id)
  return format_user(user)

@user.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
  user = User.query.get_or_404(id)
  db.session.delete(user)
  db.session.commit()
  return f'user id: {id} deleted'

@user.route('/user/<id>', methods=['PATCH'])
def update_user(id):
  user=User.query.filter_by(id=id)
  data=request.json
  if data:
    user.update(data)
  db.session.commit()
  return jsonify(user=format_user(user.one()))

@user.route('user/validate', methods=["POST"])
def verify_user():
  email=request.json['email']
  password=request.json['password']
  try:
    user = User.query.filter(User.email==email).one()
    if not (user.password == password):
      return {"verification" : False}
  except sqlalchemy.exc.NoResultFound:
    return {"verification":False}
  return {"verification":True, "id":user.id}
