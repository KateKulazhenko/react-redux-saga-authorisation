import React from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {compose} from 'redux';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider } from 'material-ui/styles';

import {FormInput} from '../../../Shared/Forms';
import {LOGIN_FORM} from '../../constants/index';
import styles from './styles';
import theme from './theme';

const validate = values => {
    const error = {};
    if (!values.email) {
        error.email = 'Required *';
    }

    if (!values.password) {
        error.password = 'Required *'
    }

    return error;
};

const Form = ({classes, error, handleSubmit}) => {
    return (
        <div className={classes.container}>
            <MuiThemeProvider theme={theme}>
            <h1 className={classes.title}>Login</h1>
            <form onSubmit={handleSubmit} className={classes.formLogin}>
                <Field
                    className={classes.item}
                    name='email'
                    component={FormInput}
                    type='email'
                    label='Email *'/>

                <Field
                    className={classes.item}
                    name='password'
                    component={FormInput}
                    type='password'
                    label='Password *'/>
                {error && <div className={classes.error}>{error}</div>}

                <Button
                    type='submit'
                    label="Submit"
                    className={classes.button}
                >Submit</Button>
            </form>
            </MuiThemeProvider>
        </div>
    )
};

Form.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

Form.defaultProps = {
    error: ''
};

export default compose(
    reduxForm({
        form: LOGIN_FORM,
        validate
    }),
    withStyles(styles)
)(Form)