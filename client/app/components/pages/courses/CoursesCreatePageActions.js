import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

export const styles = (theme) => ({
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left',
        margin: '25px 0'
    }
});

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