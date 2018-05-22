import {INSTANCE} from '../constans/persistTransform';

function request(data) {
    return INSTANCE(data);
}

export default request;