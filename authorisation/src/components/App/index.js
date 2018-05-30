import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { PersistGate } from 'redux-persist/es/integration/react';
import createStore, { history } from '../../store';

import Login from '../../modules/Auth';
import {PrivateRouteContainer as PrivateRoute} from '../../modules/Auth';
import Home from '../../components/Home';

const { store, persistor} = createStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
};

export default App;
