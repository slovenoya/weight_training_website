from sre_constants import FAILURE, SUCCESS
from flask import Blueprint, jsonify, request
import sqlalchemy
from extensions import db
from models.exercise import Exercise

exercise = Blueprint('exercise', __name__)