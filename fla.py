from datetime import datetime
import requests
from flask import Flask, redirect, request, jsonify, session
from flask import Flask, redirect, session


app = Flask(__name__)
app.secret_key = 'dasdio12909kpok'

client_id = '64f1524ada334d40a89ddf08b6a67a00'
client_secret = '173ebf295352482490a7c037214b6171'
redirect_uri = 'http://localhost:5000/callback'

SPOTIFY_CLIENT_ID = '64f1524ada334d40a89ddf08b6a67a00'
SPOTIFY_CLIENT_SECRET = '173ebf295352482490a7c037214b6171'
SPOTIFY_REDIRECT_URI = 'http://localhost:5000/callback'
SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'
SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1/'

auth_url = "https://accounts.spotify.com/api/authorize"
token_url = "https://accounts.spotify.com/api/token"
api_base_url = "https://api.spotify.com/v1/"

@app.route('/')
def index():
    return "Welcome <a href='/login'>Login</a>"

@app.route('/login')
def login():
    scope = 'user-read-private user-read-email playlist-modify-private'  # Add any additional scopes you need
    auth_url = f"{SPOTIFY_AUTH_URL}?client_id={SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri={SPOTIFY_REDIRECT_URI}&scope={scope}"
    return redirect(auth_url)
    
#    scope = 'user-read-private'
#    params = {
#        'client_id': client_id,
#        'response_type': 'code',
#        'scope': scope,
#        'redirect_uri': redirect_uri,
#        'show_dialog' : False
#    }
#    auth_url_return = f"{auth_url}?{urllib.parse.urlencode(params)}"
#    
#    return redirect(auth_url_return)

@app.route('/callback')
def callback():
    if 'error' in request.args:
        return jsonify({"error": request.args['error']})

    if 'code' not in request.args:
        return jsonify({"error": "Authorization code not found in the request"})

    req_body = {
        'code': request.args['code'],
        'grant_type': 'authorization_code',
        'redirect_uri': redirect_uri,
        'client_id': client_id,
        'client_secret': client_secret
    }

    response = requests.post(token_url, data=req_body)
    token_info = response.json()

    session['access_token'] = token_info.get('access_token')
    session['refresh_token'] = token_info.get('refresh_token')
    session['expires_at'] = datetime.now().timestamp() + token_info.get('expires_in', 0)

    return redirect('/playlists')

@app.route('/playlists')
def make_playlists():
    print("valid")
    # Check if the access token is available and valid
    if 'access_token' not in session or 'expires_at' not in session or session['expires_at'] < datetime.now().timestamp():
        return redirect('/login')  # or handle token refresh
    

    # Read song URLs from the .txt file
    with open('songs.txt', 'r') as file:
        song_urls = file.readlines()

    # Extract track IDs from URLs
    track_ids = [url.split('/')[-1].strip() for url in song_urls]

    # Create a new playlist
    headers = {
        'Authorization': f"Bearer {session['access_token']}",
        'Content-Type': 'application/json'
    }
    user_info = requests.get(f"{api_base_url}me", headers=headers).json()
    user_id = user_info['id']

    playlist_data = {
        'name': 'New Playlist',
        'description': 'Playlist created from .txt file',
        'public': False  # Set to True if you want the playlist to be public
    }
    create_response = requests.post(f"{api_base_url}users/{user_id}/playlists", headers=headers, json=playlist_data)
    playlist_id = create_response.json()['id']

    # Add tracks to the playlist
    add_tracks_data = {'uris': [f'spotify:track:{track_id}' for track_id in track_ids]}
    requests.post(f"{api_base_url}playlists/{playlist_id}/tracks", headers=headers, json=add_tracks_data)

    # Redirect or send a success response
    return redirect('/success')  # Replace with your success page
    
    
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

@app.route('/success')
def end():
    return "How did you make it here"

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)