import express from "express";
import { getUsers, loginUser, signupUser } from '../controllers/user.controller.js';

const router = express.Router();


router.get('/users', getUsers);        
router.post('/login', loginUser);     
router.post('/signup', signupUser);    

export default router;
