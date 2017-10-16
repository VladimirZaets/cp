import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import { styles } from '../../common/form/styles';


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
