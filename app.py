from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta, datetime
from random import randint
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
'''flask: maps http reqs to python func. 
    Runs python code and shows result in browser'''
#render: retrive content from html file
#request: to req the data
# Corpus trainer: to train the machine, nlp, pair in all our languages
#we are making a self learning 


app = Flask(__name__)
app.secret_key = "studychum"
'''this is for storing our data
"Chatterbot" is the username, storage adap is for creating the database'''
bot=ChatBot("Jifyy",
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    logic_adapters=[
        'chatterbot.logic.MathematicalEvaluation',
        'chatterbot.logic.TimeLogicAdapter',
        'chatterbot.logic.BestMatch',
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'I am sorry, but I do not understand. I am still learning.',
            'maximum_similarity_threshold': 0.90
        }
    ],
    database_uri='sqlite:///database.sqlite3')
#eng_bot=ChatBot("Chatterbot",storage_adapter="chatterbot.storage.SQLStorageAdapter")
#train data
trainer=ChatterBotCorpusTrainer(bot)
#this is for the custom data:
trainer.train("chatterbot.corpus.english")
#making our own data:
trainer.train(r'/root/.vscode-server/Google-India-Hackathon/data/data.yml')

@app.route("/")
def indexxx():
    return render_template("homepage.html")  #to send context to html file

@app.route("/home")
def homex():
    return render_template("homepage.html")  #to send context to html file

@app.route("/performance")
def ind():
    return render_template("performance.html") 

@app.route("/privacy")
def inde():
    return render_template("privacy.html")  

@app.route("/feedback")
def feedback():
    return render_template("feedback.html")  

@app.route("/siteblocker")
def indexx():
    return render_template("siteblocker.html")  
 
@app.route("/chatbot")
def index():
    return render_template("chatbot_index.html")  #to send context to html file

 
@app.route("/aboutus")
def about():
    return render_template("aboutUs.html")  #to send context to html file

@app.route("/get") #to get bot response
def get_bot_response():
    userText=request.args.get("msg") #get data from input where we write js to index.html
    return str(bot.get_response(userText))


@app.route("/Pomodoro", methods= ["POST", "GET"])
def Pomodoro():
    return render_template("index.html")


if __name__ == "main":
    app.run(debug=True)

