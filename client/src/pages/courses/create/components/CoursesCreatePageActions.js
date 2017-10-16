import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '../../../../common/buttons/Button';

export const styles = {
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left',
        margin: '25px 0'
    }
};

const CoursesCreatePageActions = ({classes, onCreateCourseHandler}) => (
    <div className={classes.container60}>
        <Button raised
                color="primary"
                onClick={onCreateCourseHandler}>
            Create
        </Button>
    </div>
);

CoursesCreatePageActions.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    onCreateCourseHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(CoursesCreatePageActions);
