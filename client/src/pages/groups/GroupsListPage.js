import React from 'react';
import { connect } from 'react-redux';
// import GroupsPreviewItem from './CoursesPreviewItem';
import { loadGroups } from '../../actions/groupActions';
import { Link } from 'react-router-dom';

import { GroupsListPageStyle } from './GroupsStyles';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class GroupsListPage extends React.Component {
    componentDidMount() {
        this.props.loadGroups();
    }

    render() {
        return (
            <div>
                <div className={this.props.classes.buttonContainer}>
                    <Link to="/groups/create">
                        <Button raised color="primary" className={this.props.classes.button}>Create new</Button>
                    </Link>
                </div>

                <div className={this.props.classes.list}>
                    {this.props.groups.map((group, i) => <GroupsPreviewItem key={i} group={group} />)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps, { loadGroups })(withStyles(GroupsListPageStyle)(GroupsListPage));