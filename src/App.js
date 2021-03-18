import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player';
import playersData from './data/data.json';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=> {
    setPlayer(playersData);
  },[])
  const handleAddPlayer = (player)=> {
    const newCart = [...cart, player];
     setCart(newCart);
  }
  return (
    <div className="container">
       <div className="row">
            <div className='col-md-8 player-container'>
            {
              playersData.map(player=> <Player player= {player} handleAddPlayer={handleAddPlayer}></Player>)
            }
          </div>
          <div className="col-md-4 count-container">
            <h3>Total Players: {player.length}</h3>
            <h4>Player Added:  {cart.length}</h4>
            <Cart cart={cart}></Cart>
          </div>
       </div>
    </div>
  );
}

export default App;
