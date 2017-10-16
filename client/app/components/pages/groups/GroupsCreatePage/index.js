import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../../../actions/groupActions';

import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import { styles } from '../../../common/form/styles';

import TextField from 'material-ui/TextField';

class GroupsCreatePage extends React.Component {
    handleCreateGroup() {
        const group = {};
        //get form data
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
                           autoFocus={true}
                           required={true}
                           name="title" />
                <TextField label="Start date"
                           className={classes.textField}
                           labelClassName={classes.label}
                           margin="normal"
                           required={true}
                           name="start"
                           type="date"
                           defaultValue="2018-04-27" />
                {this.renderCreatePageButton()}
            </div>
        );
    }
}

export default connect(() => ({}), { createGroup })(withStyles(styles)(GroupsCreatePage));
