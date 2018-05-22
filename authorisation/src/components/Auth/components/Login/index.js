import React from 'react';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {compose} from 'redux';

import Layout from '../../../Shared/components/Layout';

import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';

import {FormInput} from '../../../Shared/Forms';
import {LOGIN_FORM} from '../../constants/index';
import styles from './styles';

import logo from '../../../../static/image/logo.svg';

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
        <Layout>
            <header className={classes.header}>
                <img src={logo} className={classes.logo} alt="logo"/>
            </header>
            <h1 className={classes.title}>Login</h1>
            <form onSubmit={handleSubmit} className={classes.formLogin}>
                <Field
                    name='email'
                    component={FormInput}
                    type='email'
                    label='Email *'/>

                <Field
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
        </Layout>
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