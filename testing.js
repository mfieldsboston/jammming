let accessToken;
const clientId = '50c5ad47228642c58766436fb6b49163';
const clientSecret = 'd8fda74a11984992af003eff5da48a18';
const redirectURI = 'http://joyjammming.surge.sh/';

const Spotify = {

  // Get a Spotify user's access token
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },


  // Use the access token, send a search request to the Spotify API
  search(searchTerm)  {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }

    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

};

export default Spotify;



/*searchResults:
[
  {name: 'I Think to Myself', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
  {name: 'Push It Past Red', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
  {name: 'Sing A Hymn', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
  {name: 'Peace of Mind', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'},
  {name: 'Eye of the Cyclone', artist: 'Top Choice Clique', album: 'Real Chemistry: The Anthology'}
],
playlistTracks:
  [
    {name: 'Turmoil In The Land (vox version)', artist: 'FORCEFEELD', album: 'N/A'},
    {name: 'Noble Knight', artist: 'FORCEFEELD (Force the Sorcerer)', album: 'Noble Knights EP'},
    {name: 'Growing Pains', artist: 'FORCEFEELD', album: 'N/A'}
  ],*/
