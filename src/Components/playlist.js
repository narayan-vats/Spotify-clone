import React from 'react';
import TrackCard from './trackcard';

function Playlist({ tracks }) {
  return (
    <div className="playlist">
      <div className="playlist-header">
        <h1>Your Playlist</h1>
      </div>
      <div className="tracks-list">
        {tracks.map(track => (
          <TrackCard 
            key={track.id}
            title={track.title}
            artist={track.artist}
            album={track.album}
            duration={track.duration}
            cover={track.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;