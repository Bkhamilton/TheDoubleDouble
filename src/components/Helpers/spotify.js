async function getAccessToken() {
    const clientID = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
    // Get access token
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${clientID}:${clientSecret}`)}`,
      },
      body: 'grant_type=client_credentials',
    });
  
    const data = await response.json();
    return data.access_token;    
}

export { getAccessToken } 