import {call, put, takeEvery} from 'redux-saga/effects';
import _ from 'lodash';
import api from '../api/index';
import request from '../services/handleRequest';

function* callApi(action) {
    const {payload, type} = action;
    const apiMethodName = _.camelCase(type);
    const requestData = api[apiMethodName](payload);
    try {
        const response = yield call(request, requestData);
        const newType = action.type.replace('_REQUEST', '_SUCCESS');
        yield put({type: newType, payload, response});
    }
    catch (err) {
        const newType = action.type.replace('_REQUEST', '_FAILED');
        yield put({type: newType, payload, err});
    }
}

export default function* watchRequest () {
    yield takeEvery(({ type }) => /_REQUEST$/g.test(type), callApi)
}