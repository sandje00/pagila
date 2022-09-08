enum OrderByDirection {
  asc = 'asc',
  desc = 'desc'
}

interface IPaginationParams {
  tableName: string;
  indexedColumnName: string;
  limit: number;
  orderByDirection: OrderByDirection;
  selectAttributes?: string[];
}

interface IDeferredJoinParams extends IPaginationParams {
  pageNumber: number;
}

interface IKeysetParams extends IPaginationParams {
  lastId: number;
}

interface IPaginationRequest {
  query: {
    limit: string;
    pageNumber: string;
  };
}

interface IInfiniteScrollRequest {
  query: {
    limit: string;
    lastId: string;
  };
}

export {
  OrderByDirection,
  IDeferredJoinParams,
  IKeysetParams,
  IPaginationRequest,
  IInfiniteScrollRequest
};
