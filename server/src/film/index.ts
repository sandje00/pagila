import ctrl from './film.controller';
import { Router } from 'express';

const router = Router();
const path = '/film';

router.get('/', ctrl.getPage);
router.get('/infinite-scroll', ctrl.infiniteScroll);

export default { router, path };
