from extensions import db

class User(db.Model):
  __tablename__ = 'user'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(50), nullable=False, unique=True)
  password = db.Column(db.String(50), nullable=False)

  # body information of a user
  chest_cir = db.Column(db.Float, nullable=True)
  waist_cir = db.Column(db.Float, nullable=True)
  arm_cir = db.Column(db.Float, nullable=True)
  hip_cir = db.Column(db.Float, nullable=True)
  body_fat = db.Column(db.Float, nullable=True)
  height = db.Column(db.Float, nullable=True)
  weight = db.Column(db.Float, nullable=True)
  # exercise plan for a user

  def __init__(self, email, password) -> None:
    self.email = email
    self.password = password
