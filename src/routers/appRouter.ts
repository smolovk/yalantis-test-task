import express from 'express';

const router = express.Router();

router.get('/:message', (req, res) => {
  const { message } = req.params;
  res.send(message);
});

export default router;
