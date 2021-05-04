import React, { useState, useEffect } from "react";
import PokeThumbnail from "./PokeThumbnail";

const PokeList = () => {
    const [pokemonList, setPokemonList ] = useState([]);

    useEffect (() => {
        fetch (`https://pokeapi.co/api/v2/pokemon`)
        .then((res) => {return res.json()})
        .then((data) => {
            console.log(data);
            setPokemonList(data.results);
        })
    }, []);

    return (
        <div>
            <h2>Pokemon List</h2>
            {pokemonList.map((pokemon) => {
                return (
                    <PokeThumbnail pokemonProps={pokemon}/>
                )
            })}
            
        </div>
    )
}
export default PokeList;