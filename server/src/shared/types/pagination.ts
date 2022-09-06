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
  startId: number;
}

interface IPaginateRequest {
  query: {
    limit: string;
    pageNumber?: string;
    startId?: string;
  };
}

export { IDeferredJoinParams, IKeysetParams, IPaginateRequest };
