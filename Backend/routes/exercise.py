from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.exercise import Exercise

exercise = Blueprint('exercise', __name__)

  # exercise_id = db.Column(db.Integer, primary_key=True)
  # name = db.Column(db.String(50), nullable=False, unique=True)
  # body_part = db.Column(db.Enum(BodyParts), nullable=True)
  # move_type = db.Column(db.Enum(MoveTypes), nullable=True)
  # description = db.Column(db.String(3000), nullable=True)
  # url = db.Column(db.String(512), nullable=True)

def format_exercise(exercise:Exercise):
  return {
    "id":exercise.id, 
    "name":exercise.name, 
    "body_part":exercise.body_part, 
    "move_type":exercise.move_type, 
    "description":exercise.description, 
    "url":exercise.url
  }


# uncomment this chunk of code when you want to populate exercise list

# @exercise.route('/exercises', methods=['POST'])
# def post_exercises():
#   lst = request.json["exercises"]
#   for exercise in lst:
#     post_exercise(exercise)
#   return jsonify(success=True)


# @exercise.route('/exercise', methods=['POST'])
# def post_exercise(exercise):
#   name = exercise['name']
#   body_part = exercise['body_part']
#   move_type = exercise['move_type']
#   description = exercise['description']
#   url = exercise['url']
#   exercise=Exercise(name, body_part, move_type, description, url)
#   db.session.add(exercise)  
#   try:
#     db.session.commit()
#   except sqlalchemy.exc.IntegrityError:
#     return jsonify(exercise=format_exercise(exercise))
#   return jsonify(success=True)


@exercise.route('/exercise', methods=['GET'])
def get_exercises():
  exercises = Exercise.query.all()
  exercise_list = []
  for exercise in exercises:
    exercise_list.append(format_exercise(exercise))
  return {"exercises":exercise_list}