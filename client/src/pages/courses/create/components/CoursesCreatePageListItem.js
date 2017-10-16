import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '../../../../common/buttons/Button';

export const styles = {
    justify: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        margin: '0 0 0 10px'
    },
    buttonDelete: {
        backgroundColor: '#f15454',
        color: '#fff'
    }
};

const CoursesCreatePageListItem = ({classes, item, onDeleteButtonClick, onEditButtonClick, iterator}) => {
    let input;
    const wrapOnDeleteButtonClick = (e) => onDeleteButtonClick(e, item.id);
    const wrapOnEditButtonClick = (e) => onEditButtonClick(e, item.id, input);
    const listItemNumber = iterator + 1;

    return (
        <div className={`${classes.justify} list-group-item'`}>
            {
                item.edit ?
                    <input type="text"
                           ref={field => {input = field}}
                           defaultValue={item.value}/> :
                    <span className={classes.justify}>{listItemNumber}. {item.value}</span>
            }
            <div className={classes.actionContainer}>
                <Button raised
                        color="contrast"
                        className={classes.button}
                        onClick={wrapOnEditButtonClick}>
                    { item.edit ? 'Save' : 'Edit' }
                </Button>
                <Button raised
                        color="accent"
                        className={`${classes.buttonDelete} ${classes.button}`}
                        onClick={wrapOnDeleteButtonClick}>
                    Delete
                </Button>
            </div>
        </div>
    )};

CoursesCreatePageListItem.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    item: PropTypes.shape({
        value: PropTypes.string.isRequired
    }).isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired,
    onEditButtonClick: PropTypes.func.isRequired,
    iterator: PropTypes.number.isRequired
};

export default withStyles(styles)(CoursesCreatePageListItem);
