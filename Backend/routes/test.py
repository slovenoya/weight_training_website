from flask import Blueprint, request
from extensions import db

from datetime import datetime

from models.test import Event

test = Blueprint('test', __name__)

def format_event(event):
  return {
    "description" : event.description, 
    "id" : event.id, 
    "created_at" : event.created_at
  }

@test.route('/')
def hello():
  return "Hello world!"

@test.route('/event', methods = ['POST'])
def create_event():
  description = request.json['description']
  event = Event(description) #create the object
  db.session.add(event)     #add the object to the session. 
  db.session.commit()
  return format_event(event)

@test.route('/event', methods = ['GET'])
def get_events(): 
  events = Event.query.order_by(Event.id.asc()).all()
  event_list = []
  for event in events:
    event_list.append(format_event(event))
  return {'events': event_list}

@test.route('/event/<id>', methods=['GET'])
def get_event(id):
  event = Event.query.filter_by(id=id).one()
  formatted_event = format_event(event)
  return {'event': formatted_event}

@test.route('/event/<id>', methods=['DELETE'])
def delete_event(id):
  event = Event.query.filter_by(id=id).one()
  db.session.delete(event)
  db.session.commit()
  return f'Event (id: {id}) deleted!'

@test.route('/event/<id>', methods=['PUT'])
def update_event(id):
  event = Event.query.filter_by(id=id)
  description = request.json['description']
  event.update(dict(description=description, created_at = datetime.utcnow()))
  db.session.commit()
  return {'event':format_event(event.one())}