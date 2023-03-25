import { Router } from 'express';

import tryCatch from '../utils/tryCatch.js';
import {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup
}
  from '../controllers/groups.controller.js';
import requiredFields from '../middlewares/requiredFilds.js';

const router = Router();

router.get('/', tryCatch(getGroups));
router.get('/:id', tryCatch(getGroupById));
router.patch('/:id', tryCatch(updateGroup));
router.post('/', requiredFields(['name']), tryCatch(createGroup));

export default router;
