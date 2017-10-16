import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { saveCourse } from '../../../actions/courseActions';
import CoursesCreatePageForm from './components/CoursesCreatePageForm';
import CoursesCreatePageAddPlanItemForm from './components/CoursesCreatePageAddPlanItemForm';
import CoursesCreatePageList from './components/CoursesCreatePageList';
import CoursesCreatePageActions from './components/CoursesCreatePageActions';

const styles = {
    container: {
        textAlign: 'center'
    }
};

class CoursesCreatePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            image: '',
            items: []
        };
    }

    onEditButtonClick = (e, id, field) => {
        e.preventDefault();
        this.setState({
            items: this.state.items.map((item) => {
                if (item.id === id) {
                    return item.edit && field.value !== item.value ?
                        {...item, edit: !item.edit, value: field.value} :
                        {...item, edit: !item.edit}
                }

                return item;
            })
        })
    };

    onDeleteButtonClick = (e, id) => {
        e.preventDefault();
        this.setState({
            items: this.state.items.filter((item) => item.id !== id)
        })
    };

    onCreateCourseHandler = () => {

    };

    onCoursePlanItemClick = (e, field, id) => {
        e.preventDefault();

        this.setState({
            items: [
                ...this.state.items,
                {
                    value: field.value,
                    id
                }
            ]
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <CoursesCreatePageForm/>
                <CoursesCreatePageAddPlanItemForm
                    onPlanItemAdded={ this.onCoursePlanItemClick }
                />
                <CoursesCreatePageList data={this.state.items}
                                       onDeleteButtonClick={this.onDeleteButtonClick}
                                       onEditButtonClick={this.onEditButtonClick}
                />
                <CoursesCreatePageActions/>
            </div>
        )
    }
}

CoursesCreatePage.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
};

export default connect(null, { saveCourse })(withStyles(styles)(CoursesCreatePage));