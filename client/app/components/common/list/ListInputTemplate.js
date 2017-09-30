import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    container: {
        display: 'block',
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: '#3A312E'
    },
    buttonContainer: {
        textAlign: 'right',
        margin: '0 0 15px'
    },
    button: {
        width: '20%'
    }
});

let input;

const ListInputTemplate = ({onAddFieldButtonClick, classes}) => {
    let wrapperForHandler = function (e) {
            return onAddFieldButtonClick(e, input)
        };

    return (
        <div className={classes.container}>
            <TextField
                inputRef={(field) => { input = field; }}
                label="Plan Item"
                className={classes.textField}
                labelClassName={classes.label}
                margin="normal"
                name="plan-item"
                multiline={true}
            />
            <div className={classes.buttonContainer}>
                <Button raised color="primary" className={classes.button} onClick={onAddFieldButtonClick && wrapperForHandler}>Add</Button>
            </div>
        </div>
    );
};

export default withStyles(styles)(ListInputTemplate);