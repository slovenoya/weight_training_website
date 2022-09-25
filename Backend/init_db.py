# this script initialize the tables in database. 
# drop all tables before running this script.
from app import create_app
from extensions import db

if __name__ == '__main__':
  db.drop_all(app=create_app())
  db.create_all(app=create_app())