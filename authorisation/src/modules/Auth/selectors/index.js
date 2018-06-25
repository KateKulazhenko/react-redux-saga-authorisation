import {createSelector} from 'reselect';

const getAuth = state => state.auth;
const getUser = state => state.auth.user;


const getUserName = createSelector(
    getUser,
    (user) => {
        if(user) {
            return user.replace(/@.*/,'');
        }
    }
);

export default {
    getUserName,
    getAuth,
    getUser
};