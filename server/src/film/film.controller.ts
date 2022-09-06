import { FILMS_LIMIT } from 'shared/constants/limits';
import filmService from './film.service';
import { IPaginateRequest } from 'shared/types/pagination';
import { Response } from 'express';

async function getAll(req: IPaginateRequest, res: Response) {
  const pageNumber = Number(req.query.pageNumber);
  const startId = Number(req.query.startId);
  const films = await filmService.getAllFilms(FILMS_LIMIT, pageNumber, startId);
  return res.status(200).json({ films });
}

export default {
  getAll,
};
