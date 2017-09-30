import React from 'react';
import CoursesCreatePageListItem from './CoursesCreatePageListItem';
import { withStyles } from 'material-ui/styles';

export const styles = (theme) => ({
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left'
    },
    list: {
        marginTop: 25
    }
});

const CoursesCreatePageList = ({classes, data, onEditButtonClick, onDeleteButtonClick}) => {
    return (
        <div className={classes.container60}>
            <h3>Courses Plan</h3>
            <div className={classes.list + ' list-group'}>
                {data.length ?
                    data.map((item, i) => <CoursesCreatePageListItem
                                            onDeleteButtonClick={onDeleteButtonClick}
                                            onEditButtonClick={onEditButtonClick}
                                            iterator={i}
                                            key={item.id}
                                            item={item}/>) :
                    <div className="list-group-item disabled">Plan List is empty.</div>
                }
            </div>
        </div>
    )};


export default withStyles(styles)(CoursesCreatePageList);
