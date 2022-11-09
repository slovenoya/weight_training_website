from extensions import db

class Plan(db.Model):
  __tablename__ = 'plan'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer)
  exercise_id = db.Column(db.Integer)
  exercise_sequence = db.Column(db.Integer)
  activation = db.Column(db.Boolean, default=True)
  # body information of a user
  weight = db.Column(db.Float, nullable=True)
  rep = db.Column(db.Integer, nullable=True)
  
  def __init__(self, email, password, first_name, last_name, gender, age) -> None:
    pass
