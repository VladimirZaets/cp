import React from 'react';
import { sortOrderFilter } from '../../common/filters/filters';
import { withStyles } from 'material-ui/styles';

export const styles = {
    list: {
        margin: '50px 0',
    }
};

const List = ({
    data,
    numbered,
    separator,
    children,
    template,
    classes
}) => {
    return <div className={classes.list}>{children}</div>;
};

List.defaultProps = {
    data: [],
    separator: '.',
    numbered: false,
};

export default withStyles(styles)(List);
