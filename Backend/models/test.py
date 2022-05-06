from datetime import datetime
from extensions import db

class Event(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  def __repr__(self) -> str:
      return f"Event: {self.description}"

  def __init__(self, description):
      self.description = description