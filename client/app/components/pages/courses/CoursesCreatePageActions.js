import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { styles } from '../../common/form/styles';

const CoursesCreatePageActions = ({classes, onCreateCourseHandler}) => {
    return (
        <div className={classes.container60}>
            <Button raised
                    color="primary"
                    onClick={onCreateCourseHandler}>
                Create
            </Button>
        </div>
    )};


export default withStyles(styles)(CoursesCreatePageActions);
