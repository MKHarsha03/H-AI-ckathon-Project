from flask import Flask
from flask import request

app=Flask(__name__)

@app.route("/submit",methods=['POST'])
def submit():
    name=request.form['name']
    email=request.form['email']

    print(f"Name: {name},Email: {email}")
    return f"Recieved data:Name={name},Email={email}"