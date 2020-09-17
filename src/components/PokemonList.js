import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonList = (props) =>{
    
    const populate = (state) => {
        return state.pokemonList.map((item, index) =>  
            <PokemonItem key={index} pokemonItem={item}/>
        )
    }

    return (
        <section className="contributors">
            <h3 className="topic-title">
                <i className="nes-icon heart"></i>Temos que Pegar!
            </h3>
            { populate(props)}
        </section>  

    )
}

export default PokemonList;