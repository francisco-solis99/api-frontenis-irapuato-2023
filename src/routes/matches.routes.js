import { Router } from 'express';

import tryCatch from '../utils/tryCatch.js';
import {
  getMatches,
  getMatchById,
  createMatch,
  updateMatch
}
  from '../controllers/matches.controller.js';
import requiredFields from '../middlewares/requiredFilds.js';

const router = Router();

router.get('/', tryCatch(getMatches));
router.get('/:id', tryCatch(getMatchById));
router.patch('/:id', tryCatch(updateMatch));
router.post('/', requiredFields(['hour', 'pointsTeam1', 'pointsTeam2', 'teamId1', 'teamId2']), tryCatch(createMatch));

export default router;
