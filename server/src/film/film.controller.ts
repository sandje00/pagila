import {
  IInfiniteScrollRequest,
  IPaginationRequest
} from 'shared/types/pagination';
import filmService from './film.service';
import { Response } from 'express';

async function getPage(req: IPaginationRequest, res: Response) {
  const limit = Number(req.query.limit);
  const pageNumber = Number(req.query.pageNumber);
  const films = await filmService.paginate(limit, pageNumber);
  return res.status(200).json({ films });
}

async function infiniteScroll(req: IInfiniteScrollRequest, res: Response) {
  const limit = Number(req.query.limit);
  const lastId = Number(req.query.lastId);
  const films = await filmService.infiniteScroll(limit, lastId);
  return res.status(200).json({ films });
}

export default {
  getPage,
  infiniteScroll
};
