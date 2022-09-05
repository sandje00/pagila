import db from 'shared/database';
import { FILM_TABLE_NAME } from 'shared/constants/tableNames';

function getAllFilms(limit: number, startId: number) {
  return db(FILM_TABLE_NAME)
    .where('film_id', '>', startId)
    .orderBy('film_id', 'asc')
    .limit(limit);
}

export default {
  getAllFilms,
};
