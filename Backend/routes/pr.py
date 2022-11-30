from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.pr import PersonalRecord

pr = Blueprint('personal_records', __name__)

def format_pr(pr:PersonalRecord) :
  return {
    "id":pr.id, 
    "user_id":pr.user_id, 
    "exercise_id":pr.exercise_id, 
    "weight":pr.weight, 
    "rep":pr.rep
  }

@pr.route('/pr', methods=['POST'])
def post_pr():
  user_id = request.json["user_id"]
  exercise_id = request.json["exercise_id"]
  weight = request.json["weight"]
  pr = PersonalRecord(user_id, exercise_id, weight)
  db.session.add(pr)
  try:
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return jsonify(pr=None)
  return jsonify(pr=format_pr(pr))


@pr.route('/pr/<user_id>', methods=['GET'])
def get_pr_list(user_id):
  prs = PersonalRecord.query.filter_by(user_id=user_id)
  pr_list = []
  for pr in prs:
    pr_list.append(format_pr(pr))
  return {'pr_list' : pr_list}


@pr.route('/pr/<id>', methods=['PATCH'])
def update_user(id):
  pr=PersonalRecord.query.filter_by(id=id)
  data=request.json
  if data:
    pr.update(data)
  db.session.commit()
  return jsonify(user=format_pr(pr.one()))

@pr.route('/pr/<id>', methods=['DELETE'])
def delete_user(id):
  pr = PersonalRecord.query.get_or_404(id)
  db.session.delete(pr)
  db.session.commit()
  return f'pr id: {id} deleted'