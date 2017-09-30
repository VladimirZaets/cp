import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../common/navigation/Navigation';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { HeaderStyles } from './LayoutStyles';

const Links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name:'Courses',
        path:'/courses'
    }
];

const Header = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        JAVASCRIPT PROGRAMMING
                    </Typography>
                    <Navigation links={Links}/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderStyles)(Header);