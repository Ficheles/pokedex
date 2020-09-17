import React from 'react'


const Tabela = (table) => {
    return (
        <section className="showcase">
            <section className="nes-container with-title">
                <h3 className="title">Tables</h3> 
                <div id="tables" className="item">
                    <div className="nes-table-responsive">
                        <table className="nes-table is-bordered is-centered">
                            <thead>
                                <tr>
                                    <th>height</th>
                                    <th>weight</th>
                                    <th>experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{table.props.height}</th>
                                    <th>{table.props.weight}</th>
                                    <th>{table.props.base_experience}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Tabela;