from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return "Homepage is working"


@app.route("/tracker")
def tracker():
    return render_template("tracker.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)

