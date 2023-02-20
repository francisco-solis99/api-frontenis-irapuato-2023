import { Router } from 'express';

import {
  getTeams,
  getTeamById,
  createTeam
}
  from '../controllers/teams.controller.js';

const router = Router();

router.get('/', getTeams);
router.get('/:id', getTeamById);
router.post('/', createTeam);

export default router;
