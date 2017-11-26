// Create variables for use in the Spotify Module
const clientId = '6615e4eeeb8844aca74f20025fda1d51';
const clientSecret = 'facc51f263dd4b97a528f4be1ff3e77b';
const redirectUri = 'http://localhost:3000/';

let accessToken;

// Create Spotify Module
const Spotify = {

  getAccessToken() {
// Check if there is an access token, if not create one
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
  // Search Spotify for a track
    search(term) {
      fetch('https://api.spotify.com/v1/search?type=track&q=term', {
              headers: {Authorization: `Bearer ${accessToken}`}
        });
    }
};


export default Spotify;
