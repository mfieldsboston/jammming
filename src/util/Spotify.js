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
    },
    // Save the user's created playlist to their Spotify account
    savePlaylist(name, trackUris){
       if(!name || !trackUris) {return;}

       const accessToken = Spotify.getAccessToken();
       const headers = {Authorization: `Bearer ${accessToken}`};
       let userId;

       return fetch('https://api.spotify.com/v1/me', {
         headers: headers
       }).then(response => response.json())
       .then(jsonResponse => {
         userId = jsonResponse.id;
         return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({
                name: name
              })
          })
            .then(response => response.json())
            .then(jsonResponse => {
              const playlistId = jsonResponse.id;
              return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({uris: trackUris})
              });
            })
        });
      }
  };


export default Spotify;
