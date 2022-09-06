import filmService from './film.service';
import { IPaginateRequest } from 'shared/types/pagination';
import { Response } from 'express';

async function getAll(req: IPaginateRequest, res: Response) {
  const limit = Number(req.query.limit);
  const pageNumber = Number(req.query.pageNumber);
  const startId = Number(req.query.startId);
  const films = await filmService.getAllFilms(limit, pageNumber, startId);
  return res.status(200).json({ films });
}

export default {
  getAll,
};
