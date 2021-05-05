import React, { useState } from "react";
import PokeInfo from "./components/PokeInfo";
import PokeList from "./components/PokeList";
import './App.css';

function App() {
  const [ pokemon, setPokemon] = useState();
  return (
    <div>
      <PokeInfo pokemons={pokemon}/>
      <PokeList onPokemonClick={setPokemon}/>
    </div>
  );
}

export default App;
