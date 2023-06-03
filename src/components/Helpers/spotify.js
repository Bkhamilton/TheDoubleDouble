async function getAccessToken() {
    const clientID = '9d42b84671bf4fd2a8a96993f635c6b5';
    const clientSecret = '42e8c0f97b5842eca3b3c04742489c17';
  
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