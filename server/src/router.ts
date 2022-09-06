import { Router } from 'express';

// eslint-disable-next-line sort-imports
import film from 'film';
import payment from 'payment';
import rental from 'rental';

const router = Router();

router.use(film.path, film.router);
router.use(payment.path, payment.router);
router.use(rental.path, rental.router);

export default router;
