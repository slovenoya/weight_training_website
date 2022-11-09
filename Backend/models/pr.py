from extensions import db

class PersonalRecord(db.Model):
  __tablename__ = 'pr'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer)
  exercise_id = db.Column(db.Integer)
  # body information of a user
  weight = db.Column(db.Float, nullable=True)
  
  def __init__(self, user_id, exercise_id, weight) -> None:
    pass
