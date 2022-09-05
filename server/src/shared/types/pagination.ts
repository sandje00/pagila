interface IPaginateRequest {
  query: {
    limit: string;
    offset?: string;
    startId?: string;
  };
}

export { IPaginateRequest };
