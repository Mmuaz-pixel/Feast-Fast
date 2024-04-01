import { ValidateSignature } from "../Utility";
import { AuthPayLoad } from "../dto";
import { Request, Response, NextFunction } from "express";

declare global {
	namespace Express {
		interface Request {
			user?: AuthPayLoad
		}
	}
} // we added a user property of type AuthPayLoad to the global request type present in Express 

export const Authenticate = async(req: Request, res: Response, next: NextFunction) => {

	const validate = await ValidateSignature(req); 
	if(validate)
	{
		next(); 
	}else 
	{
		return res.status(401).json({"message": "user not authorized"})
	}
}