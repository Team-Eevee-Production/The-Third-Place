import express from 'express';
import userController  from '../controllers/userController';

const router = express.Router();

router.post('/signup', userController.createUser, (req, res)=>{
    return res.status(200).json(res.locals)
})

router.post('/login', userController.verifyUser, (req, res)=>{
    return res.status(200).json(res.locals.user)
})

export default router;