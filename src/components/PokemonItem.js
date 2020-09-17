import React from 'react'

const PokemonItem = (props) => {
    
    const onClick = (e) => {
        e.preventDefault();
    }

    return (
        <a 
            className="contributor"
            href={props.pokemonItem.url} 
            target="_black" 
            onClick={onClick}>
            <i className="nes-pokeball" data-url={props.pokemonItem.url}></i>
            <p data-url={props.pokemonItem.url}>{props.pokemonItem.name}</p>
        </a>
    )
}

export default PokemonItem;
