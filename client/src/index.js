import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue  from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import { Provider } from 'react-redux';
import Layout from './layout';
import history from './history';
import store from './store';
import routes from './routes'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
        error: red,
    },
});

render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                <Layout>{routes}</Layout>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);