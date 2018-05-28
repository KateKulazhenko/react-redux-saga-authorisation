import {reducer as reduxFormReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';

import auth from '../components/Auth/reducers';

import { CONFIG } from '../constans/persistTransform';

const reducer = persistCombineReducers(CONFIG, {
    form: reduxFormReducer,
    auth,
    router: routerReducer
});

export default reducer;
