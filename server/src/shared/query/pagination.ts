import { IDeferredJoinParams, IKeysetParams } from 'shared/types/pagination';
import db from 'shared/database';

export async function deferredJoinPagination({
  tableName,
  indexedColumnName,
  selectAttributes,
  limit,
  orderByDirection,
  pageNumber,
}: IDeferredJoinParams) {
  const offset = (pageNumber - 1) * limit;
  const innerQueryTableName = `${indexedColumnName}s_page`;
  const attributes = selectAttributes || '*';
  return db
    .with(innerQueryTableName, db =>
      db
        .select(indexedColumnName)
        .from(tableName)
        .orderBy(indexedColumnName)
        .limit(limit)
        .offset(offset),
    )
    .select(attributes)
    .from(tableName)
    .join(
      innerQueryTableName,
      `${innerQueryTableName}.${indexedColumnName}`,
      '=',
      `${tableName}.${indexedColumnName}`,
    )
    .orderBy(`${tableName}.${indexedColumnName}`, orderByDirection);
}

export function keysetPagination({
  tableName,
  indexedColumnName,
  selectAttributes,
  limit,
  orderByDirection,
  lastId,
}: IKeysetParams) {
  const attributes = selectAttributes || '*';
  return db
    .select(attributes)
    .from(tableName)
    .where(indexedColumnName, '>', lastId)
    .limit(limit)
    .orderBy(indexedColumnName, orderByDirection);
}
