import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from main import findSong
from convert_url import convert_spotify_url

spotify = spotipy.Spotify(
    client_credentials_manager=SpotifyClientCredentials(client_id="3df409a8be3441319607bd8745d34c31",
                                                        client_secret="4ae9fa9feefe46568eb2d39dec9a4a8f"))


def create_playlist(image, user_id, playlist_name, description, public=True, collaborative=True):
    playlist = spotify.user_playlist_create(user=user_id, name=playlist_name, public=public, description=description,
                                            collaborative=collaborative)

    # Generate songs using the findSong method
    songs = findSong(image)  # replace with appropriate arguments if needed

    # Extract Spotify URIs from the songs
    song_urls = [convert_spotify_url(song) for song in songs]

    # Add songs to the playlist
    spotify.playlist_add_items(playlist_id=playlist['id'], items=song_urls, position=None)
    return playlist


print(create_playlist('images/study.jpg', '3k3v0abu0f7zuo27gufhq5qpr',  'study playlist', 'A playlist for studying'))