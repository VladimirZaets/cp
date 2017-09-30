import React from 'react';
import { connect } from 'react-redux';
import CoursesPreviewItem from './CoursesPreviewItem';
import { loadCourses } from '../../../actions/courseActions';
import { Link } from 'react-router-dom';

import { CoursesListPageStyle } from './CoursesStyles';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

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
                    {this.props.courses.map((course, i) => <CoursesPreviewItem key={i} course={course} />)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, { loadCourses })(withStyles(CoursesListPageStyle)(CoursesListPage));