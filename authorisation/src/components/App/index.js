import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import './styles.css'
import { PersistGate } from 'redux-persist/es/integration/react'
import createStore, { history } from '../../store'

import Login from '../../modules/Auth'
import { PrivateRouteContainer as PrivateRoute } from '../../modules/Auth'
import Home from '../../components/Home'

const { store, persistor } = createStore()

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute exact path='/home' component={Home} />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
