import knex from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexfile = require('../../knexfile');

const db = knex(knexfile);

export default db;

export function dbAuthenticate() {
  return db.raw('SELECT 1+1 AS result;');
}
