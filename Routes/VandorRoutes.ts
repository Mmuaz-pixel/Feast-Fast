import express from 'express';
import { GetVandorProfile, VandorLogin, UpdateVandorProfile, UpdateVandorService } from '../Controllers';
import { Authenticate } from '../Middlewares';

const router = express.Router();

router.post('/login', VandorLogin); 

// auth middleware 
router.use(Authenticate); 
router.get('/profile', GetVandorProfile); 
router.patch('/profile', UpdateVandorProfile); 
router.patch('/service', UpdateVandorService); 

export { router as VandorRouter}