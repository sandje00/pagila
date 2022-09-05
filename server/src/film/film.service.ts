import db from 'database';
import { FILM_TABLE_NAME } from 'constants/tableNames';

function getAllFilms(startId: number, limit: number) {
  return db(FILM_TABLE_NAME)
    .where('film_id', '>', startId)
    .orderBy('film_id', 'asc')
    .limit(limit);
}

export default {
  getAllFilms,
};
