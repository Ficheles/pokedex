import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import history from './history'

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path='/' />
            {/* <Route path='/progile' component={Profile}/> */}
        </Switch>
    </ConnectedRouter>
);

export default Routes;