import React, { useState, useEffect } from "react";

const PokeInfo = (props) => {
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        if (props.pokemons) { //props.pokemon is props of App.js fetch pokemon from App.js
            fetch(props.pokemons.url)
                .then(res => { return res.json() })
                .then((data) => {
                    console.log(data);
                    setPokemon(data);
                })
        }
    }, [props.pokemons]);

    return (
        <>
            <h2>Pokemon Information</h2>
            {pokemon ?
                (
                    <>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>Name : {pokemon.name}</p>
                        <p>Height : {pokemon.height}</p>
                        <p>Weight : {pokemon.weight} kg</p>
                        <p>Types : {pokemon.types.map((type) => {return type.type.name;}).join(', ')}</p>  
                        {/* types it is a object so use map method, then used method join because it has a multiple types .join(', ') */}
                        
                        
                    </>
                )
                :
                (
                        <h2>Click on any Pokemon</h2>
                    
                )
            }

        </>
    )
}
export default PokeInfo;