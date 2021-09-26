# local flask server for testing before pushing

# Basic flask + p5.js server, using getting started examples from p5.js and flask

from flask import Flask, render_template


app = Flask(__name__, template_folder='..', static_folder='../static')

@app.route('/')
def home(name=None):
    return render_template('index.html', name=name)

@app.route('/gui')
def gui(name=None):
    return render_template('gui.html', name=name)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
    # app.run(host='192.168.1.165')