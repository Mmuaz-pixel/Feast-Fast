import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { VandorPayLoad, AuthPayLoad  } from '../dto';

export const GenerateSalt = async() => {
	return await bcrypt.genSalt(); 
}

export const GeneratePassword = async(password: string, salt: string) => {
	return await bcrypt.hash(password, salt); 
}

export const ValidatePassword = async(inputPassword: string, savedPassword: string, salt: string) =>
{
	return await GeneratePassword(inputPassword, salt) === savedPassword; 
}

export const GenerateSignature = (payload: VandorPayLoad) => {
	return jwt.sign(payload, process.env.JWT_KEY as string, {expiresIn: '1h'})
}

export const ValidateSignature = async(req: Request) => {
	const token = req.get('authorization'); 

	if(token)
	{
		const payload =  jwt.verify(token.split(' ')[1], process.env.JWT_KEY as string) as AuthPayLoad

		req.user = payload; 
		return true; 
	}

	return false 
}