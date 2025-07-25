import React from 'react';

function Sidebar({ playlists }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Spotify</h2>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Your Library</li>
        </ul>
      </div>
      <div className="playlists">
        <h3>Your Playlists</h3>
        <ul>
          {playlists.map(playlist => (
            <li key={playlist.id}>{playlist.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;