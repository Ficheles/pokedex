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
            setState(state => ({ ...state, ...response.data }));
        })();
        
        (async () => {
            const response = await api.get(`/pokemon/18`)
            setPokemon(pokemon => ({ ...pokemon, ...response.data}));
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
