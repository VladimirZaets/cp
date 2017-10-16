import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '../../common/buttons/Button';
import { loadGroups } from '../../actions/groupActions';
import { GroupsListPageStyle } from './GroupsStyles';

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
                    {this.props.groups.map((group) => <div key={group.name} group={group} />)}
                </div>
            </div>
        )
    }
}

GroupsListPage.propTypes = {
    loadGroups: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    groups: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })).isRequired};

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export default connect(mapStateToProps, { loadGroups })(withStyles(GroupsListPageStyle)(GroupsListPage));