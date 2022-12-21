import db from '../models/dbModel';
import {userController} from '../../types'
import fetch from 'node-fetch'
import { verify } from 'crypto';

//Controller
const userController: userController = {
    createUser: (req, res, next) => {
      const { username, password, first_name, last_name } = req.body;
      const queryStr = `INSERT INTO "users" (username, password, first_name, last_name) VALUES ($1, $2, $3, $4)`;
      const values = [username, password, first_name, last_name];
      db.query(queryStr, values)
        .then(() => {
            return next();
        })
        //since usernames is unique, make sure to do a check if username is a part of the db already
        .catch((err) => {
            return next({
                log: 'Error in userController.createUser',
                status: 400,
                message: { err: err },
            })
        })

    },

    verifyUser: (req, res, next) => {
        const { username, password } = req.body;
        const queryStr = `SELECT * FROM "users" WHERE username=($1)`;
        const values = [username];
        db.query(queryStr, values)
          .then((data) => {
              console.log(data.rows[0]);
              res.locals.user = data.rows[0]
              return next();
          })
          //error handler if username does not exist
        //   .then((username) => {
        //       if (!username) throw new Error("User not found");
        //   })
          .catch((err) => {
            return next({
                log: 'Error in userController.verifyUser',
                status: 400,
                message: { err: err },
            })
        })
    }
  };

  
  
  export default userController;