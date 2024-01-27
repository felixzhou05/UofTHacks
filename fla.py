from datetime import datetime
import requests

from flask import Flask, redirect, request, jsonify, session
import urllib.parse

app = Flask(__name__)
app.secret_key = 'dasdio12909kpok'

client_id = '64f1524ada334d40a89ddf08b6a67a00'
client_secret = '173ebf295352482490a7c037214b6171'
redirect_uri = 'http://localhost:3000/callback'

auth_url = "https://accounts.spotify.com/api/authorize"
token_url = "https://accounts.spotify.com/api/token"
api_base_url = "https://api.spotify.com/v1/"

@app.route('/')

def index():
    return "Welcome <a href='/login'>Login</a>"

@app.route('/login')
def login():
    scope = 'user-read-private playlist-modify-private'
    
    params = {
        'client_id': client_id,
        'response_type': 'code',
        'scope': scope,
        'redirect_uri': redirect_uri,
        'show_dialog' : True
    }
    auth_url_return = f"{auth_url}?{urllib.parse.urlencode(params)}"
    
    return redirect(auth_url_return)

@app.route('/callback')
def callback():
    if 'error' in request.args:
        return jsonify({"error": request.args['error']})
    
    if 'code' in request.args:
        req_body = {
            'code' : request.args['code'],
            'grant_type': 'authorization_code',
            'redirect_uri': redirect_uri,
            'client_id' : client_id,
            'client_secret': client_secret
        }
        
    response = requests.post(token_url, data=req_body)
    token_info =response.json()
    
    session['access_token'] = token_info['access_token']
    session['refresh_token'] =token_info['refresh_token']
    session['expires_at'] = datetime.now().timestamp() + token_info['expires_in']
    
    return redirect('/playlists')

@app.route('/playlists')
def make_playlists():
    if 'access_token' not in session:
        return redirect('/login')
    
    if datetime.now().timestamp() > session['expires_at']:
        return redirect('refresh-token')
    
    
@app.route('/refresh-token')
def refresh_token():
    if datetime.now().timestamp() > session['expires_at']:
        req_body = {
            'grant_type': 'refresh_token',
            'refresh_token': session['refresh_token'],
            'client_id' : client_id,
            'client_secret': client_secret
        }
    response = request.post(token_url, data=req_body)
    new_token_info = response.json()
    
    session['access_token'] = new_token_info['access_token']
    session['expires_at'] = datetime.now().timestamp() + new_token_info['expires_in']
    return redirect('/playlists')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)