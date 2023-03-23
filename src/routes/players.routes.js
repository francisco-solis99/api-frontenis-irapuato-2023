import { Router } from 'express';

import tryCatch from '../utils/tryCatch.js';
import {
  getPlayers,
  getPlayerById,
  createPlayer
}
  from '../controllers/players.controller.js';
import requiredFields from '../middlewares/requiredFilds.js';

const router = Router();

router.get('/', tryCatch(getPlayers));
router.get('/:id', tryCatch(getPlayerById));
router.post('/', requiredFields(['name', 'teamId']), tryCatch(createPlayer));

export default router;
