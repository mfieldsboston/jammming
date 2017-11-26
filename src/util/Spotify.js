// Create variables for use in the Spotify Module - FO
const clientId = '6615e4eeeb8844aca74f20025fda1d51';
const clientSecret = 'facc51f263dd4b97a528f4be1ff3e77b';
const redirectUri = 'http://localhost:3000/';
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
        return accessToken;
      }
      else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
      }
    },
  // Method for searching Spotify for a track
  // Use the access token, send a search request to the Spotify API
    search(term) {
      const accessToken = Spotify.getAccessToken();
  // Send request and Authorization
      return fetch('https://api.spotify.com/v1/search?type=track&q=term', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
  // Convert the response to json with first then method, remember there are
  // two callbacks within the first then method!!
      .then(response =>
              {
              	if(response.ok) {
                  return response.json();
              }
                throw new Error('Request failed!');
              },
            networkError =>
              {
                console.log(networkError.message);
      }).then(jsonResponse =>
              {
                if (!jsonResponse.tracks){return [];}
                return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
             }));
        });
      },
      savePlaylist() {

      }
  };


export default Spotify;
