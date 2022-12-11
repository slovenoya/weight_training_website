from extensions import db
from sqlalchemy import ForeignKey

class PersonalRecord(db.Model):
  __tablename__ = 'pr'
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, ForeignKey('user.id'))
  exercise_id = db.Column(db.Integer, ForeignKey('exercise.id'))
  weight = db.Column(db.Float, nullable=True)
  time = db.Column(db.DateTime, nullable=True)
  rep = db.Column(db.Integer, default=1)
  
  def __init__(self, user_id, exercise_id, weight, rep) -> None:
    self.user_id = user_id
    self.exercise_id = exercise_id
    self.weight = weight
    self.rep = rep
