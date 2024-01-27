import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

spotify = spotipy.Spotify(
    client_credentials_manager=SpotifyClientCredentials(client_id="3df409a8be3441319607bd8745d34c31",
                                                        client_secret="4ae9fa9feefe46568eb2d39dec9a4a8f"))


def find_recommendations(danceability, energy, instrumentalness, liveness, loudness, tempo, valence, seed_genres=['pop', 'rap'], target_popularity=90, limit=5):
    recommendations = spotify.recommendations(seed_genres=seed_genres,
                                              target_danceability=danceability,
                                              target_energy=energy,
                                              target_instrumentalness=instrumentalness,
                                              target_liveness=liveness,
                                              target_loudness=loudness,
                                              target_tempo=tempo,
                                              target_valence=valence,
                                              target_popularity=target_popularity,
                                              limit=limit)
    return recommendations
