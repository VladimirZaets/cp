import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from '../../../../common/fields/TextField';

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

const CoursesCreatePageForm = ({classes}) => (
    <div className={classes.container60}>
        <form>
            <h1>Create course</h1>
            <div className={classes.container}>
                <TextField
                    label="Title"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    autoFocus
                    required
                    name="title"
                />
                <TextField
                    label="Description"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    required
                    name="description"
                />
                <TextField
                    label="Image"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    required
                    name="image"
                />
            </div>
        </form>
    </div>
);

CoursesCreatePageForm.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default withStyles(styles)(CoursesCreatePageForm);
