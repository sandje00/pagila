import {
  deferredJoinPagination,
  keysetPagination,
} from 'shared/query/pagination';

function getAllFilms(limit: number, pageNumber?: number, startId?: number) {
  const params = {
    tableName: 'film',
    indexedColumnName: 'film_id',
    limit,
    orderByDirection: 'asc',
  };
  return (
    (pageNumber && deferredJoinPagination({ ...params, pageNumber })) ||
    (startId && keysetPagination({ ...params, startId }))
  );
}

export default {
  getAllFilms,
};
