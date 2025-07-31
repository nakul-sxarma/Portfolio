# app.py
from flask import Flask, render_template

# Create a Flask web application instance
app = Flask(__name__)

# Define the main route for the homepage
@app.route('/')
def index():
    """
    Renders the main portfolio page.
    """
    #
    # but you could pass it from here as well.
    return render_template('index.html')

# This allows the script to be run directly
if __name__ == '__main__':
    # Runs the app in debug mode for development
    # Turn off debug=True for production
    app.run(debug=True)
    app.run(host='0.0.0.0', debug=True)