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
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False, unique=False)
  body_part = db.Column(db.Enum(BodyParts), nullable=True)
  move_type = db.Column(db.Enum(MoveTypes), nullable=True)
  description = db.Column(db.String(3000), nullable=True)
  url = db.Column(db.String(512), nullable=True)

  def __init__(self, name, body_part, move_type, description, url) -> None:
    self.name=name
    self.body_part=body_part
    self.move_type=move_type
    self.description=description
    self.url=url
