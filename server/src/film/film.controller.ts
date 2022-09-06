import {
  IInfiniteScrollRequest,
  IPaginationRequest,
} from 'shared/types/pagination';
import filmService from './film.service';
import { Response } from 'express';

async function getAll(
  req: IPaginationRequest & IInfiniteScrollRequest,
  res: Response,
) {
  const limit = Number(req.query.limit);
  const pageNumber = Number(req.query.pageNumber);
  const lastId = Number(req.query.lastId);
  const films =
    (pageNumber && (await filmService.paginate(limit, pageNumber))) ||
    (lastId && (await filmService.infiniteScroll(limit, lastId)));
  return res.status(200).json({ films });
}

export default {
  getAll,
};
