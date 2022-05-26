import enum
from extensions import db

#define the body_parts
LEG = 1
GLUTE = 2
CHEST = 3
BACK = 4
LOWER_BACK = 5
ABS = 6


#define the move types
PUSH = 1
PULL = 2
LEG_FRONT = 3
LEG_BACK = 4


class Movement (db.Model):
  __tablename__ = 'user'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False, unique=True)
  body_part = db.Column(db.Enum())
  move_type = db.Column(db.Enum(PUSH, PULL, LEG_FRONT, LEG_BACK))
  # exercise plan for a user

  def __init__(self, email, password, first_name, last_name, gender, age) -> None:
    self.email = email
    self.password = password
    self.first_name = first_name
    self.last_name = last_name
    self.gender = gender
    self.age = age
