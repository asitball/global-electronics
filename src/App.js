import { useEffect, useState } from 'react';
import './App.css';
import playersData './data/data.json';

function App() {
  const [player, setPlayer] = useState([])
  useEffect(()=> {
    setPlayer(playersData);
    console.log(playersData);
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;
