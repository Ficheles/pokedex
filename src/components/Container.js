import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import api from '../services/api'
import Pokemon from './Pokemon'

const Container = () => {
    const [state, setState] = useState({ count: 0, next: '', previous: '', results: [] });
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        (async () => {
            const response = await api.get(`/pokemon?offset=${1}&limit=${10}`)
            const {count, next, previous, results} = response.data

            setState(state => ({ ...state, count, next, previous, results }));
        })();
        
        (async () => {
            const response = await api.get(`/pokemon/1`)
            const {name, abilities} = response.data
            setPokemon(pokemon => ({ ...pokemon, name, abilities }));
        })();

    }, []);

    return (
        <div className="container">
            <main className="main-content">
                <section className="showcase">
                    <Pokemon pokemon={pokemon}/>
                </section>
                <section className="showcase">
                    <PokemonList pokemonList={state.results} />
                </section>                    
            </main>
        </div>
    )
}

export default Container;
