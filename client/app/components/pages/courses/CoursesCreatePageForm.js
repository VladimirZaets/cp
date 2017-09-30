import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

export const styles = (theme) => ({
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: '#3A312E'
    }
});

const CoursesCreatePageForm = ({classes}) => {
    return (
    <div className={classes.container60}>
        <form>
            <h1>Create course</h1>
            <div className={classes.container}>
                <TextField
                    label="Title"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    autoFocus={true}
                    required={true}
                    name="title"
                />
                <TextField
                    label="Description"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    required={true}
                    name="description"
                />
                <TextField
                    label="Image"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    required={true}
                    name="image"
                />
            </div>
        </form>
    </div>
)};


export default withStyles(styles)(CoursesCreatePageForm);
