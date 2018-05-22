import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import People from 'material-ui-icons/People';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const Logout = ({classes, user, handleClick}) => {
    return (
        <div className={classes.logout}>
            <h4 className={classes.userName}>{user}</h4>
            <Button
                type='button'
                label='Logout'
                onClick={handleClick}
                className={classes.button}
            >
                <People className={classes.rightIcon} />
                Logout
            </Button >
        </div>
    )

};

Logout.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    user: PropTypes.string
};

Logout.defaultProps = {
    user: null
};

export default withStyles(styles)(Logout);