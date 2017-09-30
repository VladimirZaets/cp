import knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../config'

export default bookshelf(knex(config.db));