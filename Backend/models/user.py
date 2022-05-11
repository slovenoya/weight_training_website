from extensions import db

class User(db.Model):
  __tablename__ = 'user'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(50), nullable=False)
  password = db.Column(db.String(50), nullable=False)
  first_name = db.Column(db.String(20), nullable=False)
  last_name = db.Column(db.String(20), nullable=False)
  gender = db.Column(db.Boolean, nullable=False)
  age = db.Column(db.Integer, nullable=False)

  # body information of a user
  chest_cir = db.Column(db.Float, nullable=True)
  waist_cir = db.Column(db.Float, nullable=True)
  arm_cir = db.Column(db.Float, nullable=True)
  hip_cir = db.Column(db.Float, nullable=True)
  body_fat = db.Column(db.Float, nullable=True)
  height = db.Column(db.Float, nullable=True)
  weight = db.Column(db.Float, nullable=True)
  # exercise plan for a user

  def __init__(self, email, password, first_name, last_name, gender, age) -> None:
    self.email = email
    self.password = password
    self.first_name = first_name
    self.last_name = last_name
    self.gender = gender
    self.age = age
