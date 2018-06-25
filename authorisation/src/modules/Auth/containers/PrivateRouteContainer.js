import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import selectors from '../selectors';

import PrivateRoute from '../components/PrivateRoute';

function mapStateToProps(state) {
    return {
        user: selectors.getUser(state)
    }
}

PrivateRoute.propTypes = {
    user: PropTypes.string
};

PrivateRoute.defaultProps = {
    user: false
};

export default connect(mapStateToProps)(PrivateRoute);
