import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { createGroup } from '../../../actions/groupActions';
import Button from '../../../common/buttons/Button';
import { styles } from '../../../common/form/styles';
import TextField from '../../../common/fields/TextField';


class GroupsCreatePage extends React.Component {
    handleCreateGroup() {
        const group = {};
        this.props.createGroup(group);
    }
    
    renderCreatePageButton() {
        const { classes } = this.props;
        
        return (
            <div className={classes.container60}>
                <Button raised
                        color="primary"
                        onClick={() => this.handleCreateGroup()}>
                    Create
                </Button>
            </div>
        )};
        
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <TextField label="Title"
                           className={classes.textField}
                           labelClassName={classes.label}
                           margin="normal"
                           autoFocus
                           required
                           name="title" />
                <TextField label="Start date"
                           className={classes.textField}
                           labelClassName={classes.label}
                           margin="normal"
                           required
                           name="start"
                           type="date"
                           defaultValue="2018-04-27" />
                {this.renderCreatePageButton()}
            </div>
        );
    }
}

GroupsCreatePage.propTypes = {
    createGroup: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default connect(() => ({}), { createGroup })(withStyles(styles)(GroupsCreatePage));
