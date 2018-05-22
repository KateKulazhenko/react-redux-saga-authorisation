import Reactotron from 'reactotron-react-js'
import { applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import mySaga from './sagas';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

export const history = createHistory();

export default () => {
    const sagaMonitor = Reactotron.createSagaMonitor();

    const middleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware({sagaMonitor});

    const store = Reactotron.createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        compose(applyMiddleware(sagaMiddleware, middleware))
    );
    const persistor = persistStore(
        store
    );

    sagaMiddleware.run(mySaga);

    return {store, persistor}
}