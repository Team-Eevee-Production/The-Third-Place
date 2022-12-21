import express from 'express';
import imageController from '../controllers/imageController';

const router = express.Router();

//Route which will grab all images based off prompt + mood
router.post('/', imageController.fetchImages, (req,res) => {
  return res.status(200).json({images: res.locals.imageArr});
});

export default router;