import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import mySaga from './sagas';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

export const history = createHistory();

export default () => {
    const middleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
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