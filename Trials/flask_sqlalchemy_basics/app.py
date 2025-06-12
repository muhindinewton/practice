from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from datetime import datetime

app=Flask(__name__) #Instantiates the flask app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.string(50), nullable=False)
    address = db.Column(db.string(500), nullable=False)
    city = db.Column(db.string(50), nullable=False)
    postcode = db.Column(db.string(50), nullable=False)
    email = db.Column(db.string(50), nullable=False, unique=True)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_dat = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    ship_date = db.Column(db.DateTime)
    deliver_date = db.Column(db.DateTime)
    coupon_code = db.Column(db.string(50))

class Product(db.model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.string(100), nullable = False, unique = True)
    price = db.Column(db.Integer, nullable = False)
