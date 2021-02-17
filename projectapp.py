import json
import pymongo
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from pymongo import MongoClient

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
client = MongoClient()
db = client.California_Fire_Incidents
collection = db.wildfires

#Test
@app.route('/')
def test():
    return "App is working perfectly"

###Getting all data in the collection
@app.route("/", methods=['POST'])
def insert_document():
    req_data = request.get_json()
    collection.insert_one(req_data).inserted_id
    return ('', 204)

@app.route('/data')
def get():
    documents = collection.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)

if __name__ == '__main__':
    app.run(debug=True)