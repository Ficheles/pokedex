import React from 'react'
import TYPES from '../enum/const'
import Tabela from './Tabela'


const Pokemon = (props) => {

    if(Object.keys(props.pokemon).length === 0) return('');

    const {name, abilities, forms, moves, types, sprites} = props.pokemon;
    const icon = `nes-${name}`;

    const listAbility = (abilities) => {
        return abilities.map((el, index) => {
            return (
                <li key={index}>{el.ability.name}</li>                
            )
        })        
    }
    
    const listForms = (forms) => {
        return forms.map((form, index) => {
            return (
                <li key={index}>{form.name}</li>
            )
        })
    }

    const listTypes = (types) => {
        return types.map((item, index) => {
            return (
                <a href="#" className="nes-badge" key={index}>
                    <span className={TYPES[item.type.name]}>{item.type.name}</span>
                </a>
            )
        })
    }

    const listMoves = (moves) => moves.map(move => move.move.name).join(", ")
    

    return (
        <section className="nes-container with-title">
            <h3 className="title">{name}</h3> 
            <div id="balloons" className="item">
                <section className="nes-container">
                    <section className="message-list">
                        
                        <section className="message -right">
                            
                            <div className="nes-balloon from-right">
                                
                                <ol>Forms: {listForms(forms||[])}</ol>
                            </div>
                            <div className="avatar">
                                <img data-src="https://github.com/trezy.png?size=80" alt="Emeriti Trezy" className="" src={sprites.back_default} />
                            </div>
                        </section>

                        <section className="message -left">
                            <div className="avatar">
                                <img data-src="https://github.com/trezy.png?size=80" alt="Emeriti Trezy" className="" src={sprites.front_default} />
                            </div>
                            <div className="nes-balloon from-left">
                                <p>
                                    <i className={icon}></i>
                                    {name}
                                </p>
                                <div className="row">
                                    <div className="col-6">
                                    <ul>Ability: {listAbility(abilities)}</ul>
                                    </div>
                                    <div className="col-6">
                                    
                                    </div>
                                </div>

                            </div>                            
                        </section>
                        
                    </section>
                    <div id="badges" className="item">
                        {listTypes(types||[]) }                            
                    </div>
                </section>
            </div>
            <div id="cursor" className="item">
                <p className="nes-balloon from-left nes-pointer">
                    Moves: <br />{listMoves(moves||[])}
                </p>
            </div>
            <Tabela props={props.pokemon} />
                 
        </section>
    )
}

export default Pokemon;
