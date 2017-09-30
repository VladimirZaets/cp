import express from 'express';
import * as routes from './routes';
import isFunction from 'lodash/isFunction'

let router = express.Router();

for (let route in routes) {
    if (routes.hasOwnProperty(route) && isFunction(routes[route])) {
        routes[route](router);
    }
}

export default router;
