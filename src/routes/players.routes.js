import { Router } from 'express';

import {
  getPlayers,
  getPlayerById,
  createPlayer
}
  from '../controllers/players.controller.js';

const router = Router();

router.get('/', getPlayers);
router.get('/:id', getPlayerById);
router.post('/', createPlayer);

export default router;
