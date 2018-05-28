import {all} from 'redux-saga/effects';

import watchRequest from './watchRequest';
import authSaga from '../components/Auth/saga';

export default function* mySaga() {
    yield all([
        watchRequest(),
        authSaga()
    ])
}