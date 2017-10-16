import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { CoursesPreviewItemStyle } from '../../CoursesStyles';
import Typography from '../../../../common/typography/Typography';
import Card, { CardContent, CardMedia } from '../../../../common/cards/Card';

const CoursesPreviewItem = ({ course, classes }) => (
    <NavLink to={`/courses/${course.id}`} className={classes.link}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={course.image}
                title={course.name}
            />
            <CardContent>
                <Typography type="headline" component="h2">
                    {course.name}
                </Typography>
                <Typography component="p">
                    {course.description}
                </Typography>
            </CardContent>
        </Card>
    </NavLink>
);

CoursesPreviewItem.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default withStyles(CoursesPreviewItemStyle)(CoursesPreviewItem);
