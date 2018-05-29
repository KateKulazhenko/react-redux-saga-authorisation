import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';

import styles from './styles.js';

const FormInput = ({input, label, type, meta: {touched, error}, classes}) => (
    <div>
        <TextField
            {...input}
            type={type}
            placeholder={label}
            label={label}
        />
        {touched && error && <div className={classes.error}>{error}</div>}
    </div>
);

FormInput.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

FormInput.defaultProps = {
    label: '',
    type: ''
};

export default withStyles(styles)(FormInput);
