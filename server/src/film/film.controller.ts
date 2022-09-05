import { Request, Response } from 'express';
import { FILMS_LIMIT } from 'shared/constants/limits';
import filmService from './film.service';

async function getAll(req: Request, res: Response) {
  const startId = Number(req.query.startId);
  const films = await filmService.getAllFilms(startId, FILMS_LIMIT);
  return res.status(200).json({ films });
}

export default {
  getAll,
};
