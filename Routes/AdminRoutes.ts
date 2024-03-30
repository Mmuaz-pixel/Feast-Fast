import express from 'express';
import { CreateVandor, getVandorById, getVandors } from '../Controllers';

const router = express.Router();

router.post('/createVandor', CreateVandor); 
router.get('/vandors', getVandorById); 
router.get('/vandor/:id', getVandors); 

export { router as AdminRouter};