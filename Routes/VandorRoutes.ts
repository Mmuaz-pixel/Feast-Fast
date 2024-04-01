import express from 'express';
import { GetVandorProfile, VandorLogin, UpdateVandorProfile } from '../Controllers';
import { Authenticate } from '../Middlewares';

const router = express.Router();

router.post('/login', VandorLogin); 

// auth middleware 
router.get('/profile',Authenticate,  GetVandorProfile); 
router.patch('/profile',Authenticate,  UpdateVandorProfile); 

export { router as VandorRouter};
