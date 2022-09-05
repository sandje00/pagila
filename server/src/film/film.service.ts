import db from 'shared/database';
import { FILM_TABLE_NAME } from 'shared/constants/tableNames';

function getAllFilms(limit: number, offset?: number, startId?: number) {
  return (
    (offset && deferredJoinPagination(limit, offset)) ||
    (startId && keysetPagination(limit, startId))
  );
}

export default {
  getAllFilms,
};

function deferredJoinPagination(limit: number, offset: number) {
  return db
    .with('film_ids_page', db =>
      db
        .select('film_id')
        .from(FILM_TABLE_NAME)
        .orderBy('film_id')
        .limit(limit)
        .offset(offset),
    )
    .select('*')
    .from(FILM_TABLE_NAME)
    .join(
      'film_ids_page',
      'film_ids_page.film_id',
      '=',
      `${FILM_TABLE_NAME}.film_id`,
    )
    .orderBy(`${FILM_TABLE_NAME}.film_id`, 'asc');
}

function keysetPagination(limit: number, startId: number) {
  return db(FILM_TABLE_NAME)
    .where('film_id', '>', startId)
    .orderBy('film_id', 'asc')
    .limit(limit);
}
