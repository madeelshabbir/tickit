import express from 'express';
import { currentUser } from '@tickitcore/common';

const router = express.Router();

router.get('/api/users/current-user', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser });
});

export { router as currentUserRouter };
