import { push } from 'react-router-redux'
import { put, takeLatest, all } from 'redux-saga/effects'
import * as actionCreators from '../actions'
import { stopSubmit } from 'redux-form'
import { LOGIN_FORM } from '../constants'

const messageError = 'Wrong email or password'

function * redirectToDashboard () {
  yield put(push('/home'))
}

function * hadlerError () {
  yield put(stopSubmit(LOGIN_FORM, { _error: messageError }))
}

export default function * authSaga () {
  yield all([
    takeLatest(actionCreators.sendLoginSuccess, redirectToDashboard),
    takeLatest(actionCreators.sendloginFailed, hadlerError)
  ])
}
