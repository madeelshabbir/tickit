import express from 'express';

const router = express.Router();

router.delete('/api/users/sign-out', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signOutRouter };
