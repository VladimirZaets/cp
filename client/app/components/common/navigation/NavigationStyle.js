export const NavigationStyle = {
    navigation: {
        boxSizing: 'border-box',
        margin: 0,
        textAlign: 'right'
    },
    navigationContainer: {
        width: '100%'
    }
};

export const NavigationItemStyle = theme => ({
    item: {
        display: 'inline-block',
        margin: '0 4px'
    },
    root: {
        display: 'block',
        padding: '13px 20px',
        textTransform: 'uppercase',
        borderRadius: 5,
        color: '#fff',
        transition: theme.transitions.create(['background-color'], {
            duration: 500
        }),
        '&:hover': {
            color: '#fff',
            backgroundColor: '#77BFF8',
            textDecoration: 'none',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
        }
    },
    active: {
        color: '#fff',
        backgroundColor: '#1976d2',
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    }
});