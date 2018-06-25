import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import selectors from '../selectors';

import Logout from '../components/Logout';

class LogoutContainer extends React.Component {
    handleClick = () => {
        const { action: { logout } } = this.props;
        logout();
    };

    render() {
        const {user} = this.props;
        const props = {
            handleClick: this.handleClick,
            user
        };

        return (
            <Logout {...props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        user: selectors.getUserName(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actionCreators, dispatch)
    }
}

LogoutContainer.propTypes = {
    user: PropTypes.string,
    action: PropTypes.object.isRequired
};

LogoutContainer.defaultProps = {
    user: null
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);