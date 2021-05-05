import React, { useState, useEffect } from "react";
import PokeThumbnail from "./PokeThumbnail";

const PokeList = ( props ) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => { return res.json() })
            .then((data) => {
                // console.log(data);
                setPokemonList(data.results);
            })
    }, []);

    return (
        <>
            <h2>Pokemon List</h2>
            {pokemonList.map((pokemon) => {
                return (
                    // when i click on the pokemon then pokeInfo will set to that specific pokemon, we did this in App.js 
                    <div onClick={() =>{props.onPokemonClick(pokemon)}}> 
                        <PokeThumbnail pokemon={pokemon} />
                    </div>
                )
            })}
        </>
    )
}
export default PokeList;