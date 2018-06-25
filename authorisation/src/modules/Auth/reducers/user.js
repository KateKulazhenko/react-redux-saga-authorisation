import { handleActions } from 'redux-actions';
import { sendLoginSuccess, logout, sendloginFailed } from '../actions/index';

const initialState = '';

export default handleActions({
    [sendLoginSuccess]: (state, action) => {
        return action.payload.email
    },
    [sendloginFailed]: () => {
        return null
    },
    [logout]: () => {
        return null
    }
}, initialState);
