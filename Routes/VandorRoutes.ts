import express from 'express';
import { GetVandorProfile, VandorLogin, UpdateVandorProfile, UpdateVandorService, addFood, getFood } from '../Controllers';
import { Authenticate } from '../Middlewares';

const router = express.Router();

router.post('/login', VandorLogin); 

// auth middleware 
router.use(Authenticate); 
router.get('/profile', GetVandorProfile); 
router.patch('/profile', UpdateVandorProfile); 
router.patch('/service', UpdateVandorService); 

router.get('/food', getFood); 
router.patch('/food', addFood)

export { router as VandorRouter}