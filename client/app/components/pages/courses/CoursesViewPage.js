import React from 'react';
import { connect } from 'react-redux';
import { loadCourse } from '../../../actions/courseActions';

class CoursesViewPage extends React.Component {
    componentDidMount() {
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

function mapStateToProps (state, props) {
    return {
        course: state.courses.find(item => item.id == props.match.params.id) || {}
    }
}

export default connect(mapStateToProps, { loadCourse })(CoursesViewPage);