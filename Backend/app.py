from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:zdk0421ZDK.@localhost/workout'
db = SQLAlchemy(app)

class Event(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.String(100), nullable=False)
#  created_at = db.Column(db.DateTime, nullabl=False, default=datetime.utcnow)

  def __repr__(self) -> str:
      return f"Event: {self.description}"

  def __init__(self, description) -> None:
      self.description = description


def format_event(event):
  return {
    "description" : event.description, 
    "id" : event.id, 
    "create_at" : event.create_at
  }

@app.route('/')
def hello():
  return "Hello world!"

@app.route('/event', methods = ['POST'])
def create_event():
  description = request.json['descriptions']
  event = Event(description)
  db.session.add(event)
  db.session.commit()

@app.route('/event', methods = ['GET'])
def get_events(): 
  event = Event.query.order_by(Event.id.asc()).all()


if __name__ == '__main__':
  app.run()