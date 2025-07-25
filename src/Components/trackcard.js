import React from 'react';

function TrackCard({ title, artist, album, duration, cover }) {
  return (
    <div className="track-card">
      <div className="track-info">
        <img src={cover} alt={title} className="track-cover" />
        <div className="track-details">
          <h4>{title}</h4>
          <p>{artist} • {album}</p>
        </div>
      </div>
      <div className="track-duration">
        <span>{duration}</span>
      </div>
    </div>
  );
}

export default TrackCard;