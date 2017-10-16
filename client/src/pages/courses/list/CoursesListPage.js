import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import CoursesPreviewItem from './components/CoursesPreviewItem';
import { loadCourses } from '../../../actions/courseActions';
import { CoursesListPageStyle } from '../CoursesStyles';
import Button from '../../../common/buttons/Button';

class CoursesListPage extends React.Component {
    componentDidMount() {
        this.props.loadCourses();
    }

    render() {
        return (
            <div>
                <div className={this.props.classes.buttonContainer}>
                    <Link to="/courses/create">
                        <Button raised color="primary" className={this.props.classes.button}>Create new</Button>
                    </Link>
                </div>

                <div className={this.props.classes.list}>
                    {this.props.courses.map(course => <CoursesPreviewItem key={course.id} course={course} />)}
                </div>
            </div>
        )
    }
}

CoursesListPage.propTypes = {
    loadCourses: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    })).isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, { loadCourses })(withStyles(CoursesListPageStyle)(CoursesListPage));