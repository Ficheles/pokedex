import React from 'react'
import ABILITY from '../enum/const'

const Pokemon = (props) => {

    if(Object.keys(props.pokemon).length === 0) return('');

    const icon = `nes-${props.pokemon?.name}`;

    const listAbility = (pokemon) => {
        return pokemon.abilities.map((item, index) => {
            return (
                <a href="#" className="nes-badge" key={index}>
                    <span className={ABILITY[item.ability.name]}>{item.ability.name}</span>
                </a>
            )
        })        
    }

    return (
        <section className="nes-container with-title">
            <h3 className="title">{props.pokemon?.name}</h3> 
            <div id="balloons" className="item">
                <section className="nes-container">
                    <section className="message-list">
                        <section className="message -left">
                            <img className="nes-bcrikko" src=""/>
                            <div className="nes-balloon from-left">
                                <p><i className={icon}></i></p>
                            </div>                            
                        </section>  
                        <div id="badges" className="item">
                            { listAbility(props.pokemon)}                            
                        </div>
                    </section>
                </section>
            </div> 
        </section>
    )
}

export default Pokemon;
