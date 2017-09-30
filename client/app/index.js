import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import Layout from './components/layout';
import { Provider } from 'react-redux';
import history from './history';
import store from './store';
import routes from './routes'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue  from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

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