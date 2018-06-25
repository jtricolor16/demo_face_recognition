from flask import Flask
from app.recognition.views import app_recognition
from app.camera.views import app_camera
from app.user.views import app_user
from app.views import app_main

app = Flask(__name__, static_url_path="/static")

#Blueprints
app.register_blueprint(app_main, url_prefix='/face_recognition')
app.register_blueprint(app_recognition, url_prefix='/face_recognition')
app.register_blueprint(app_camera, url_prefix='/face_recognition')
app.register_blueprint(app_user, url_prefix='/face_recognition')
