import knex from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexfile = require('../../knexfile');

const environment = process.env.ENVIRONMENT || 'development';

const db = knex(knexfile[environment]);

export default db;

export function dbAuthenticate() {
  return db.raw('SELECT 1+1 AS result;');
}
