 import logo from './logo.svg';
import './App.css';
import myPhoto from './images/download.png'; 
import myphoto1 from './images/user (1).png';
import myphoto2 from './images/search.png';
import Sidebar from './Components/sidebar';
import Playlist from './Components/playlist';
import PlayerControls from './Components/playercontrol';



function App() {

const playlists = [
    { id: 1, name: 'Discover Weekly' },
    { id: 2, name: 'Daily Mix 1' },
    { id: 3, name: 'Release Radar' },
    { id: 4, name: 'Chill Hits' },
  ];

  const tracks = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', cover: 'https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be' },
    { id: 2, title: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', duration: '3:35', cover: 'https://i.scdn.co/image/ab67616d00001e02ca41a947c13b78749c4953b1'},
    { id: 3, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*CK LOVE 3: OVER YOU', duration: '2:21', cover: 'https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be' },
    { id: 4, title: 'good 4 u', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', cover: 'https://i.scdn.co/image/ab67616d00001e02ca41a947c13b78749c4953b1' },
  ];
   

  return (
    <div className="App">
      <header className="App-header">
        <img src={myPhoto} alt='logo'  width="100px " height="100"   className='a'/>

        <h1  className='B'>WELCOME TO SPOTIFY</h1>

        <img src={myphoto1}  width="70px"  height= "70px"    className='C'/>
        <img src={myphoto2}  width="40px"  height= "40px"    className='D'/>

        </header>
        


  

  
    <div className="spotify-clone">
      <div className="main-content">
        <Sidebar playlists={playlists} />
        <Playlist tracks={tracks} />
      </div>
      <PlayerControls currentTrack={tracks[2]} />
    </div>
  






          
        







       
        
      

   </div>   
    
  );
}

export default App;




