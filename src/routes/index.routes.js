import { Router } from 'express';
import players from './players.routes.js';
import teams from './teams.routes.js';
import groups from './groups.routes.js';
import matches from './matches.routes.js';

const router = Router();

router.use('/players', players);
router.use('/teams', teams);
router.use('/groups', groups);
router.use('/matches', matches);

export default router;

// TODO: Add a way to get the teams with the players
// TODO: Add a way to get the groups with the teams
// TODO: Add a way to get the matches with the teams
