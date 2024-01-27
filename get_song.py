import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

spotify = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials(client_id="3df409a8be3441319607bd8745d34c31", client_secret="4ae9fa9feefe46568eb2d39dec9a4a8f"))


def findRecommendations(danceability, energy, instrumentalness, liveness, loudness, tempo, valence):
    return spotify.recommendations(seed_genres=['pop', 'classical', 'rap', 'hardstyle', 'k-pop'], target_danceability=danceability, target_energy=energy, target_instrumentalness=instrumentalness, \
        target_liveness=liveness, target_loudness=loudness, target_tempo=tempo, target_valence=valence, target_popularity=90, limit=5)
    
    
print(findRecommendations(0.1,0.3,0.8,0.1,0.2,100,0.3))