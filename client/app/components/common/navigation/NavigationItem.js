import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { NavigationItemStyle } from './NavigationStyle';

const NavigationItem =  ({link, classes}) => {
    return (
        <li className={classes.item}>
            <NavLink to={link.path} className={classes.root} exact activeClassName={classes.active}> {link.name} </NavLink>
        </li>
    );
};

export default withStyles(NavigationItemStyle)(NavigationItem);