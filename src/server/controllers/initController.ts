import db from '../models/dbModel';
import {initController} from '../../types'
import fetch from 'node-fetch'

//Controller
const initController: initController = {
  createDB: (req, res, next) => {
    const userDbQuery: string = `CREATE TABLE IF NOT EXISTS users(
      "id" SERIAL NOT NULL,
      "username" text NOT NULL,
      "password" text NOT NULL,
      "first_name" text NOT NULL,
      "last_name" text NOT NULL,
      PRIMARY KEY("id"),
      UNIQUE("username"));`

    const imagesDbQuery: string = `CREATE TABLE IF NOT EXISTS images(
      "id" SERIAL NOT NULL,
      "usr_id" integer NOT NULL,
      "url" text NOT NULL,
      "mood" text NOT NULL,
      PRIMARY KEY ("id"),
      CONSTRAINT "user" FOREIGN KEY ("usr_id") REFERENCES users("id"));`

      db.query(userDbQuery, [])
      .then(() => {
        db.query(imagesDbQuery, [])
      })
      .then(() => next())
      .catch((err) => {
        return next({
        log: `Error caught in initController.createDB ${err}`,
        status: 400,
        message: `Error has occured in initController.createDB. ERROR: ${err}`
      })
    })

  }  
  };


export default initController;