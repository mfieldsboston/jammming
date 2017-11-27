// Create variables for use in the Spotify Module
const clientId = '6615e4eeeb8844aca74f20025fda1d51';
const redirectURI = 'http://localhost:3000/';
let accessToken;

// Create Spotify Module
const Spotify = {
// Get a Spotify user's access token
  getAccessToken() {
// Method to check if there is an access token, if not create one
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

      if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        const expiresIn = Number(urlExpiresIn[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        console.log(accessToken, 'ACCESS TOKEN!!')
        return accessToken;
      }
      else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
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
    }
  };


export default Spotify;
