import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '../../../../common/buttons/Button';
import TextField from '../../../../common/fields/TextField';

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

        this.iterator = 0;
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        this.iterator += 1;
        this.props.onPlanItemAdded(e, this.inputField, this.iterator);
    };

    setInputField = (field) => {
        this.inputField = field;
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container60}>
                <h3>Add Plan Item</h3>
                <TextField
                    inputRef={(field) => this.setInputField(field)}
                    label="Plan Item"
                    className={classes.textField}
                    labelClassName={classes.label}
                    margin="normal"
                    name="plan-item"
                    multiline
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

CoursesCreatePageAddPlanItemForm.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    onPlanItemAdded: PropTypes.func.isRequired
};

export default withStyles(styles)(CoursesCreatePageAddPlanItemForm);
