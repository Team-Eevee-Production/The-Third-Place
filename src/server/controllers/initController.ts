import db from '../models/dbModel';
import {initController} from '../../types'
import fetch from 'node-fetch'

//Controller
const initController: initController = {
  createDB: (req, res, next) => {
    const userDbQuery: string = `placeholder`
    const imagesDbQuery: string = `placeholder`
    return next()
  }
};


export default initController;