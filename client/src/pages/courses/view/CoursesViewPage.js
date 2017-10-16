import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCourse } from '../../../actions/courseActions';

class CoursesViewPage extends React.Component {
    componentWillMount() {
        this.props.loadCourse(this.props.match.params.id);
    }

    render() {
        return (
            <div className="list-group">
                {this.props.course.name}
                {this.props.course.description}
                {this.props.course.image}
            </div>
        )
    }
}

CoursesViewPage.propTypes = {
    loadCourse: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    course: PropTypes.instanceOf(Object).isRequired
};


function mapStateToProps (state, props) {
    const course = state.courses
        .find(item => item.id.toString() === props.match.params.id.toString());

    return {
        course: course || {}
    };
}

export default connect(mapStateToProps, { loadCourse })(CoursesViewPage);