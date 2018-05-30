import { createAction } from 'redux-actions';

export const sendLoginRequest = createAction('SEND_LOGIN_REQUEST');
export const sendLoginSuccess = createAction('SEND_LOGIN_SUCCESS');
export const sendloginFailed = createAction('SEND_LOGIN_FAILED');
export const logout = createAction('LOGOUT');