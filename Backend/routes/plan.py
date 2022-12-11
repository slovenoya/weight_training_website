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
    "set":plan.set, 
    "day_count":plan.day_count, 
    "increment":plan.increment
  }

@plan.route('/plan', methods=['POST'])
def post_plan():
  plan_id = request.json['plan_id']
  user_id = request.json['user_id']
  exercise_id = request.json['exercise_id']
  set = request.json['set']
  rep = request.json['rep']
  sequence = request.json['sequence']
  weight = request.json['weight']
  plan=Plan(plan_id, user_id, exercise_id, set, rep, sequence, weight)
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

@plan.route('/plan_finish/<user_id>', methods=['POST'])
def finish_today_plan(user_id):
  plans = Plan.query.filter_by(user_id=user_id, activation=True).all()
  plan_list = []
  for plan in plans:
    finish_one_plan(plan.id)
    plan_list.append(format_plan(plan))
  return jsonify(plan_list=plan_list)

@plan.route('/plan_finish', methods=['GET'])
def finish_one_plan(id):
  plan = Plan.query.get_or_404(id)
  if (plan.day_count % 3 + 1) == plan.sequence:
    print(format_plan(plan))
    plan.weight += plan.increment
    print(format_plan(plan))
  plan.day_count += 1
  db.session.commit()
  return format_plan(plan)

@plan.route('/plan/increment/<user_id>/<plan_id>/<exercise_id>', methods=['POST'])
def change_increment(user_id, plan_id, exercise_id):
  plans = Plan.query.filter_by(user_id=user_id, plan_id=plan_id, exercise_id=exercise_id).all()
  increment = request.json["increment"]
  plan_list = []
  for plan in plans:
    plan.increment=increment
    plan_list.append(format_plan(plan))
    db.session.commit()
  return jsonify(plan_list=plan_list)

@plan.route('/plan/weight/<user_id>/<plan_id>/<exercise_id>', methods=['POST'])
def change_weight(user_id, plan_id, exercise_id):
  plans = Plan.query.filter_by(user_id=user_id, plan_id=plan_id, exercise_id=exercise_id).all()
  increment = request.json["increment"]
  plan_list = []
  for plan in plans:
    plan.increment=increment
    plan_list.append(format_plan(plan))
    db.session.commit()
  return jsonify(plan_list=plan_list)

@plan.route('/plan/plan_id/<plan_id>', methods=['DELETE'])
def delete_plansr(plan_id):
  plans = Plan.query.filter_by(plan_id=plan_id).all()
  for plan in plans:
    delete_plan(plan.id)
  return f'plan id: {id} deleted'

@plan.route('/plan/<id>', methods=['DELETE'])
def delete_plan(id):
  plan = Plan.query.get_or_404(id)
  db.session.delete(plan)
  db.session.commit()
  return f'plan id: {id} deleted'