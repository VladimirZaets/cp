import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

export const styles = (theme) => ({
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
});

const CoursesCreatePageListItem = ({classes, item, onDeleteButtonClick, onEditButtonClick, iterator}) => {
    let input;
    const wrapOnDeleteButtonClick = (e) => onDeleteButtonClick(e, item.id);
    const wrapOnEditButtonClick = (e) => onEditButtonClick(e, item.id, input);

    return (
        <div className={classes.justify + ' list-group-item'}>
            {item.edit ? <input type="text" ref={field => input = field} defaultValue={item.value}/> : <span className={classes.justify}>{++iterator}. {item.value}</span>}
            <div className={classes.actionContainer}>
                <Button raised
                        color="contrast"
                        className={classes.button}
                        onClick={wrapOnEditButtonClick}>
                    { item.edit ? 'Save' : 'Edit' }
                </Button>
                <Button raised
                        color="accent"
                        className={classes.buttonDelete + ' ' + classes.button}
                        onClick={wrapOnDeleteButtonClick}>
                    Delete
                </Button>
            </div>
        </div>
    )};


export default withStyles(styles)(CoursesCreatePageListItem);
