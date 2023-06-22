import * as React from 'react';
import { useState, useEffect } from 'react';
import EpisodeNode from '../EpisodeNode/EpisodeNode';
import { getAccessToken } from '../../Helpers/spotify';
import './FeaturedEpisode.css';

export default function FeaturedEpisode() {
  const [featuredEpisode, setFeaturedEpisode] = useState(null);

  useEffect(() => {
    async function searchEpisode(episodeTitle) {
      const podcastID = '6HKVei1HZ3XodZkO5KkEK3';
      const accessToken = await getAccessToken();
      const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(episodeTitle)}&market=US&type=episode&show_id=${podcastID}`;
      const response = await fetch(searchUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      const episode = data.episodes.items.find(episode => episode.name === episodeTitle);
      setFeaturedEpisode(episode);
    }
    searchEpisode("An Early Look at the 2023 NBA Draft Class");
  }, []);

  if (!featuredEpisode) {
    return <><div className='main-padding'><h1>Featured Episode</h1></div><div className='main-padding'><h1>Loading...</h1></div></>;
  }

  return (
    <div>
      <div className='main-padding'>
        <h1>Featured Episode</h1>
      </div>
      <EpisodeNode episode={featuredEpisode}/>
    </div>
  );
}