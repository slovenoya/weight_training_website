from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.plan import Plan

plan = Blueprint('plan', __name__)

def format_plan(plan:Plan):
  return {
    "id":plan.id, 
    "plan_id":plan.plan_id, 
    "user_id":plan.user_id, 
    "exercise_id":plan.exercise_id, 
    "sequence":plan.sequence, 
    "activation":plan.activation, 
    "weight":plan.weight, 
    "rep":plan.rep, 
    "set":plan.set
  }

@plan.route('/plan', methods=['POST'])
def post_plan():
  plan_id = request.json['plan_id']
  user_id = request.json['user_id']
  exercise_id = request.json['exercise_id']
  plan=Plan(plan_id, user_id, exercise_id)
  db.session.add(plan)
  try:
    db.session.commit()
  except sqlalchemy.exc.IntegrityError:
    return jsonify(plan=None)
  return jsonify(plan=format_plan(plan))

@plan.route('/plan/<user_id>', methods=['GET'])
def get_plans(user_id):
  plans = Plan.query.filter_by(user_id=user_id).all()
  plan_list = []
  for plan in plans:
    plan_list.append(format_plan(plan))
  return {"plans":plan_list}

@plan.route('/plan/<id>', methods=['PATCH'])
def update_plan(id):
  plan=Plan.query.filter_by(id=id)
  data=request.json
  if data:
    plan.update(data)
  db.session.commit()
  return jsonify(user=format_plan(plan.one()))

@plan.route('/plan/<user_id>/<plan_id>', methods=['POST'])
def change_plan_status(user_id, plan_id):
  plans = Plan.query.filter_by(user_id=user_id, plan_id=plan_id).all()
  plan_list = []
  for plan in plans:
    plan.activation = not plan.activation
    db.session.commit()
    plan_list.append(format_plan(plan))
  return jsonify(success=True)

@plan.route('/plan/<user_id>/<plan_id>', methods=['GET'])
def finish_today_plan(user_id, plan_id):
  plans = Plan.query.filter_by(user_id=user_id, plan_id=plan_id).all()
  plan_list = []
  for plan in plans:
    plan.day_count += 1
    plan.weight += plan.increment
    db.session.commit()
    plan_list.append(format_plan(plan))
  return jsonify(plan_list=plan_list)

@plan.route('/plan/<user_id>/<plan_id>/<exercise_id>', methods=['POST'])
def change_increment(user_id, plan_id, exercise_id):
  plans = Plan.query.filter_by(user_id=user_id, plan_id=plan_id, exercise_id=exercise_id).all()
  increment = request.json["increment"]
  plan_list = []
  for plan in plans:
    plan.increment=increment
    plan_list.append(format_plan(plan))
    db.session.commit()
  return jsonify(plan_list=plan_list)