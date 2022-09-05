import { FILMS_LIMIT } from 'shared/constants/limits';
import filmService from './film.service';
import { IPaginateRequest } from 'shared/types/pagination';
import { Response } from 'express';

async function getAll(req: IPaginateRequest, res: Response) {
  const offset = Number(req.query.offset);
  const startId = Number(req.query.startId);
  const films = await filmService.getAllFilms(FILMS_LIMIT, offset, startId);
  return res.status(200).json({ films });
}

export default {
  getAll,
};
