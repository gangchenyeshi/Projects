import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";

const PokeThumbnail = ({pokemonProps}) =>{ //Destructuring the Props
    const [images, setImages] = useState("");

    useEffect(() => {
        fetch(pokemonProps.url)// in https://pokeapi.co/api/v2/pokemon there has a two information 1 name 2 url when we type this url in browser more infomations, nw we are using this main url + this url
        .then((res) => {return res.json()})
        .then((data) => {
            console.log(data);
            setImages(data.sprites.front_default)
        })
    }, [pokemonProps])
    return(
        <div>
            <img src={images} alt={pokemonProps.name}/>
            <h2>{pokemonProps.name}</h2>
        </div>
    )
}
export default PokeThumbnail;