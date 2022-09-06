interface IPaginateRequest {
  query: {
    limit: string;
    pageNumber?: string;
    startId?: string;
  };
}

export { IPaginateRequest };
