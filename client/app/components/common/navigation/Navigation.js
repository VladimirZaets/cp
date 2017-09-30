import React from 'react';
import NavigationItem from './NavigationItem';
import { withStyles } from 'material-ui/styles';
import { NavigationStyle } from './NavigationStyle';

const Navigation = ({links, classes}) => {
    return (
        <div className={classes.navigationContainer}>
            <ul className={classes.navigation}>
                {links.map((link, i) => <NavigationItem key={i} link={link} />)}
            </ul>
        </div>
    );
};

export default withStyles(NavigationStyle)(Navigation);
