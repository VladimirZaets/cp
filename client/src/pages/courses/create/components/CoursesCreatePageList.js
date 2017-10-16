import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import CoursesCreatePageListItem from './CoursesCreatePageListItem';

export const styles = {
    container60: {
        display: 'inline-block',
        width: '60%',
        textAlign: 'left'
    },
    list: {
        marginTop: 25
    }
};

const CoursesCreatePageList = ({classes, data, onEditButtonClick, onDeleteButtonClick}) => (
    <div className={classes.container60}>
        <h3>Courses Plan</h3>
        <div className={`${classes.list} list-group`}>
            {data.length ?
                data.map((item, i) =>
                    <CoursesCreatePageListItem
                        onDeleteButtonClick={onDeleteButtonClick}
                        onEditButtonClick={onEditButtonClick}
                        iterator={i}
                        key={item.id}
                        item={item}/>) :
                <div className="list-group-item disabled">Plan List is empty.</div>
            }
        </div>
    </div>
);

CoursesCreatePageList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(CoursesCreatePageList);
