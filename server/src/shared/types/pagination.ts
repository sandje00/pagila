interface IPaginationParams {
  tableName: string;
  indexedColumnName: string;
  limit: number;
  orderByDirection: string;
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
  IDeferredJoinParams,
  IKeysetParams,
  IPaginationRequest,
  IInfiniteScrollRequest
};
