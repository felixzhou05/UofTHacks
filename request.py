import json
import os
import base64
from requests import post

# Credentials you get from registering a new application
client_id = '64f1524ada334d40a89ddf08b6a67a00'
client_secret = '173ebf295352482490a7c037214b6171'
redirect_uri = 'https://localhost:3000/'


def get_token():
    auth_string = client_id + ":" + client_secret
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")
    
    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {"grant_type": "client_credentials"}
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

def get_auth_header(token):
    return {"Authorization": "Bearer " + token}

token = get_token()

print (token)