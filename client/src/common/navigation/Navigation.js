import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';
import { NavigationStyle } from './NavigationStyle';

const Navigation = ({ links, classes }) => (
    <div className={classes.navigationContainer}>
        <ul className={classes.navigation}>
            { links.map(link => <NavigationItem key={link.id} link={link} />) }
        </ul>
    </div>
);

Navigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default withStyles(NavigationStyle)(Navigation);
