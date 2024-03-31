import express from 'express';
import { CreateVandor, getVandorById, getVandors } from '../Controllers';

const router = express.Router();

router.post('/createVandor', CreateVandor); 
router.get('/vandor/:id', getVandorById); 
router.get('/vandors', getVandors); 

export { router as AdminRouter};