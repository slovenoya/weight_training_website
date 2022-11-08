from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.pr import PersonalRecord

pr = Blueprint('personal_records', __name__)