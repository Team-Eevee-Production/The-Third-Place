import db from '../models/dbModel';
import {imageController, image} from '../../types'
import fetch from 'node-fetch'

//Controller
const imageController: imageController = {
  fetchImages: (req, res, next) => {
    const {mood, prompt} = req.body
    const finalPrompt: string = mood + " " + prompt;
    const imageArr: string[] = [];

    fetch(`https://lexica.art/api/v1/search?q=${finalPrompt}`)
    .then(data => data.json())
    .then(data => {
      data.images.forEach((image: image) => {
        imageArr.push(image.src);
      });
      res.locals.imageArr = imageArr;
      return next()
    })
  }
};


export default imageController;