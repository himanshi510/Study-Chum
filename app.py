from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta, datetime
from random import randint


app = Flask(__name__)
app.secret_key = "studychum"


@app.route("/", methods= ["POST", "GET"])
def Home():
        return render_template("chatbot_index.html")

@app.route("/Pomodoro", methods= ["POST", "GET"])
def Pomodoro():
    return render_template("index.html")


if __name__ == "main":
    app.run(debug=True)

