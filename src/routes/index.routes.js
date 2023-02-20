import { Router } from 'express';
import players from './players.routes.js';
import teams from './teams.routes.js';

const router = Router();

router.use('/players', players);
router.use('/teams', teams);

export default router;
