from extensions import db

class PersonalRecord(db.Model):
  __tablename__ = 'pr'
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer)
  exercise_id = db.Column(db.Integer)
  weight = db.Column(db.Float, nullable=True)
  
  def __init__(self, user_id, exercise_id, weight) -> None:
    self.user_id = user_id
    self.exercise_id = exercise_id
    self.weight = weight
