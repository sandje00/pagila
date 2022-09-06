import { Router } from 'express';

// eslint-disable-next-line sort-imports
import film from 'film';
const router = Router();

router.use(film.path, film.router);

export default router;
