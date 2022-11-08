import enum
from extensions import db

class BodyParts(enum.IntEnum):
  #define the body_parts
  LEG = 1
  GLUTE = 2
  CHEST = 3
  BACK = 4
  ABS = 5

class MoveTypes(enum.IntEnum):
  #define the move types
  PUSH = 1
  PULL = 2
  LEG_FRONT = 3
  LEG_BACK = 4

class Intensity(enum.IntEnum):
  LOW=1
  MID=2
  HIGH=3

class Exercise (db.Model):
  __tablename__ = 'exercise'
  # essential information of a user
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False, unique=True)
  body_part = db.Column(db.Enum(BodyParts))
  move_type = db.Column(db.Enum(MoveTypes))
  # exercise plan for a user

  def __init__(self, id, name, description, body_part, move_type) -> None:
    self.id=id
    self.name=name
    self.description=description
    self.body_part=body_part
    self.move_type=move_type
