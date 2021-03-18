import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import playersData from './data/data.json';

function App() {
  const [player, setPlayer] = useState([])
  useEffect(()=> {
    setPlayer(playersData);
  },[])
  return (
    <div>
      {
        playersData.map(player=> <Player player={player}></Player>)
      }
    </div>
  );
}

export default App;
