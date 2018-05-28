import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore, { history } from '../../store';

import Login from '../Auth';
import {PrivateRouteContainer as PrivateRoute} from '../Auth';
import Home from '../Home';
import MainPage from '../MainPage';

const { store, persistor} = createStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute path="/film" component={MainPage}/>
                    </Switch>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    )
};

export default App;
