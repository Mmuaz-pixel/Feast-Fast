import express from 'express';
import { GetVandorProfile, VandorLogin, UpdateVandorProfile } from '../Controllers';

const router = express.Router();

router.post('/login', VandorLogin); 
router.get('/profile', GetVandorProfile); 
router.patch('/profile', UpdateVandorProfile); 

export { router as VandorRouter};
