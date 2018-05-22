import {createFilter} from 'redux-persist-transform-filter';
import axios from 'axios';
import localForage from 'localforage';

const INSTANCE = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const SAVE_AUTH = createFilter(
    'auth',
    ['user'],
);

const CONFIG = {
    key: 'primary',
    storage: localForage,
    whitelist: ['auth'],
    transforms: [SAVE_AUTH]
};

export {
    INSTANCE,
    CONFIG
};