import {
  deferredJoinPagination,
  keysetPagination
} from 'shared/query/pagination';

function paginate(limit: number, pageNumber: number) {
  const params = {
    tableName: 'film',
    indexedColumnName: 'film_id',
    limit,
    orderByDirection: 'asc',
    pageNumber
  };
  return deferredJoinPagination(params);
}

function infiniteScroll(limit: number, lastId: number) {
  const params = {
    tableName: 'film',
    indexedColumnName: 'film_id',
    limit,
    orderByDirection: 'asc',
    lastId
  };
  return keysetPagination(params);
}

export default {
  paginate,
  infiniteScroll
};
