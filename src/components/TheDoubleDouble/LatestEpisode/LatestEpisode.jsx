import * as React from 'react';
import { useState, useEffect } from 'react';
import EpisodeNode from '../EpisodeNode/EpisodeNode';
import { getAccessToken } from '../../Helpers/spotify';
import './LatestEpisode.css';

export default function LatestEpisode() {
    const [latestEpisode, setLatestEpisode] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const accessToken = await getAccessToken();
        const podcastID = '6HKVei1HZ3XodZkO5KkEK3';

        // Get latest episode data
        const response = await fetch(`https://api.spotify.com/v1/shows/${podcastID}/episodes?limit=1&market=US`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
      
        const data = await response.json();
        setLatestEpisode(data.items[0]);

      }
  
      fetchData();
    }, []);
  
    if (!latestEpisode) {
      return <div className='main-padding'><h1>Loading...</h1></div>;
    }
    
    return (
        <div>
            <div className='main-padding'>
                <h1>Latest Episode</h1>
            </div>
            <EpisodeNode episode={latestEpisode}/>
        </div>
    );
};
