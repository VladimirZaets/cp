import React from 'react';
import { connect } from 'react-redux';
import { saveCourse } from '../../../actions/courseActions';
import CoursesCreatePageForm from './CoursesCreatePageForm';
import CoursesCreatePageAddPlanItemForm from './CoursesCreatePageAddPlanItemForm';
import CoursesCreatePageList from './CoursesCreatePageList';
import CoursesCreatePageActions from './CoursesCreatePageActions';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        textAlign: 'center'
    }
});

class CoursesCreatePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            image: '',
            items: []
        };

        this.onCoursePlanItemClick = this.onCoursePlanItemClick.bind(this);
        this.onCreateCourseHandler = this.onCreateCourseHandler.bind(this);
        this.onCreateCourseHandler = this.onCreateCourseHandler.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
    }

    onEditButtonClick (e, id, field) {
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
    }

    onDeleteButtonClick (e, id) {
        e.preventDefault();
        this.setState({
            items: this.state.items.filter((item) => item.id !== id)
        })
    }

    onCreateCourseHandler (e) {
        debugger;
    }

    onCoursePlanItemClick (e, field, id)  {
        e.preventDefault();
        this.setState({
            items: [
                ...this.state.items,
                {
                    value: field.value,
                    id: id
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

function mapStateToProps (state, props) {
    return {

    }
}

export default connect(mapStateToProps, { saveCourse })(withStyles(styles)(CoursesCreatePage));