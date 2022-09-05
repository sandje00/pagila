import ctrl from './film.controller';
import { Router } from 'express';

const router = Router();
const path = '/film';

router.get('/', ctrl.getAll);

export default { router, path };
