import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { NavigationItemStyle } from './NavigationStyle';

const NavigationItem =  ({link, classes}) => (
    <li className={classes.item}>
        <NavLink to={link.path} className={classes.root} exact activeClassName={classes.active}>
            {link.name}
        </NavLink>
    </li>
);

NavigationItem.propTypes = {
    link: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default withStyles(NavigationItemStyle)(NavigationItem);