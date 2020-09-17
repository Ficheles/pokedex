import React from 'react'

const PokemonItem = props => {

    return (
        <a 
            className="contributor"
            href={props.pokemonItem.url} 
            target="_black" >
            <img 
                className="nes-avatar is-large is-rounded"
                data-src="https://github.com/4k1k0.png?size=64" 
                alt={props.pokemonItem.name}
                src="https://github.com/4k1k0.png?size=64" /> 
            <p>{props.pokemonItem.name}</p>
        </a>
    )
}

export default PokemonItem;
