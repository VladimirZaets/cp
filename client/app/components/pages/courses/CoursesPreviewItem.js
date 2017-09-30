import React from 'react';
import { NavLink } from 'react-router-dom';
import { CoursesPreviewItemStyle } from './CoursesStyles';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const CoursesPreviewItem = ({course, classes}) => {
    return (
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
};

export default withStyles(CoursesPreviewItemStyle)(CoursesPreviewItem);
