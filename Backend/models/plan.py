from extensions import db
from sqlalchemy import ForeignKey

class Plan(db.Model):
  __tablename__ = 'plan'
  id = db.Column(db.Integer, primary_key=True)
  plan_id = db.Column(db.Integer, ForeignKey('plan.id'))
  user_id = db.Column(db.Integer, ForeignKey('user.id'))
  exercise_id = db.Column(db.Integer, ForeignKey('exercise.id'))
  sequence = db.Column(db.Integer, nullable=True)
  activation = db.Column(db.Boolean, default=True)
  weight = db.Column(db.Float, nullable=True)
  rep = db.Column(db.Integer, nullable=True)
  set = db.Column(db.Integer, nullable=True)
  day_count = db.Column(db.Integer, default=0)
  increment = db.Column(db.Integer, default=5)
  
  def __init__(self, plan_id, user_id, exercise_id) -> None:
    self.plan_id = plan_id
    self.user_id = user_id
    self.exercise_id = exercise_id
