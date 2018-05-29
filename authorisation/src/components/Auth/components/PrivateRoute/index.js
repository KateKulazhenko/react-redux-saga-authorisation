import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, user, ...rest}) => {
    console.log(user);
    return (<Route {...rest} render={(props) => {
        let component;

        if (user) {
            component = <Component {...props} />
        } else {
            component = <Redirect to='/login'/>
        }

        return component;
    }}
    />);
};

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    user: PropTypes.string
};

PrivateRoute.defaultProps = {
    user: null
};

export default PrivateRoute;