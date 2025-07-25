import React from 'react';

function PlayerControls({ currentTrack }) {
  return (
    <div className="player-controls">
      <div className="now-playing">
        <img src={currentTrack.cover} alt={currentTrack.title} className="now-playing-cover" />
        <div className="now-playing-details">
          <h4>{currentTrack.title}</h4>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
      <div className="player-buttons">
        <button>Previous</button>
        <button>Play</button>
        <button>Next</button>
      </div>
      <div className="progress-bar">
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}

export default PlayerControls;