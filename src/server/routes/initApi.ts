import express from 'express';
import initController from '../controllers/initController';

const router = express.Router();

//Route which will grab all images based off prompt + mood
router.get('/', initController.initDB, (req,res) => {
  return res.status(200);
});

export default router;