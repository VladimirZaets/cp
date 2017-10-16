import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { HeaderStyles } from './LayoutStyles';
import Navigation from '../common/navigation/Navigation';
import AppBar from '../common/appBar/AppBar';
import Toolbar from '../common/toolbar/Toolbar';
import Typography from '../common/typography/Typography';


const Links = [
    {
        name: 'Home',
        path: '/',
        id: '1'
    },
    {
        name:'Courses',
        path:'/courses',
        id: '2'
    }
];

const Header = ({classes}) => (
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

Header.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};


export default withStyles(HeaderStyles)(Header);