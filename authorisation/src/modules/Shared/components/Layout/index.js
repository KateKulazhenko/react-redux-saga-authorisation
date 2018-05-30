import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

import styles from './styles';

const Layout = ({children, classes}) => {
    return (
        <Grid container item xs={12} justify='center' alignContent='center' direction='column' className={classes.root}>{children}</Grid>
    );
};

Layout.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);