import { Router } from 'express';
import tryCatch from '../utils/tryCatch.js';

import {
  getTeams,
  getTeamById,
  createTeam
}
  from '../controllers/teams.controller.js';

const router = Router();

router.get('/', tryCatch(getTeams));
router.get('/:id', tryCatch(getTeamById));
router.post('/', tryCatch(createTeam));

export default router;
