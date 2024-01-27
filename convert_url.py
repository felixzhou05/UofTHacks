def convert_spotify_url(url):
    """
    Converts a Spotify URL from 'https://open.spotify.com/track/(key)' to 'spotify:track:(key)' format.

    Args:
    url (str): The Spotify URL to convert.

    Returns:
    str: The converted Spotify URL in the 'spotify:track:(key)' format.
    """
    key = url.split("/")[-1]
    converted_url = f"spotify:track:{key}"
    return converted_url