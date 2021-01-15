import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemon(response.data.results);
      });

  };

  return (
    <div className="everythingCenter">
      <h1>Fetch Pokémon!</h1>

      <button onClick={getPokemon}>Fetch Pokemon</button>

      <div className="toCenter">
        {pokemon.map((poke, index) => {
          return (<p poke={poke} key={index} >  {poke.name}  </p>)
        })}
      </div>

    </div>
  );

}
export default App;