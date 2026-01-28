from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    """Render the home page"""
    return render_template('home.html')


@app.route('/about')
def about():
    """Render the about page"""
    return render_template('about.html')


@app.route('/membership')
def membership():
    """Render the membership page"""
    return render_template('membership.html')


if __name__ == '__main__':
    app.run(debug=True)
