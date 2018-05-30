import {all} from 'redux-saga/effects';

import watchRequest from './watchRequest';
import authSaga from '../modules/Auth/sagas';

export default function* mySaga() {
    yield all([
        watchRequest(),
        authSaga()
    ])
}