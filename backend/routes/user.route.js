import express from "express";
import { getUsers, loginUser, signupUser } from '../controllers/user.controller.js';
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();


router.get('/users', authMiddleware, getUsers);        
router.post('/login', loginUser);     
router.post('/signup', signupUser);    

export default router;
