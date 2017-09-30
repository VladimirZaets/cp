import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

export const styles = (theme) => ({
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left',
        marginTop: 25
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
        width: '30%'
    },
    container: {
        display: 'block',
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    form: {
        display: 'block',
        textAlign: 'center'
    }
});

class CoursesCreatePageAddPlanItemForm extends React.Component {
    constructor (props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.iterator = 0;
    }

    onSubmitHandler (e) {
        e.preventDefault();
        this.props.onPlanItemAdded(e, this.inputField, ++this.iterator);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container60}>
                <h3>Add Plan Item</h3>
                <TextField
                    inputRef={(field) => this.inputField = field}
                    label="Plan Item"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    name="plan-item"
                    multiline={true}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        raised
                        color="primary"
                        className={classes.button}
                        onClick={this.onSubmitHandler}
                    >
                        Add item
                    </Button>
                </div>
            </form>
        )
    }
}

let input;


export default withStyles(styles)(CoursesCreatePageAddPlanItemForm);
