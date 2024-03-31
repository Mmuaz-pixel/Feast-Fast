import { Request, Response, NextFunction } from "express"
import { VandorLoginInput } from "../dto"
import { Vandor } from "../Models";
import { ValidatePassword } from "../Utility";

export const VandorLogin = async(req: Request, res: Response, next: NextFunction) => {

	const {email, password} = <VandorLoginInput>req.body; 

	const existingVandor = await Vandor.findOne({email: email})

	if(existingVandor)
	{
		const check = await ValidatePassword(password, existingVandor.password, existingVandor.salt)

		if(check)
		{
			// login logic goes here
		}
		else 
		{
			return res.json({"message": "incorrect credentials"}); 
		}
	}
}

export const GetVandorProfile = async(req: Request, res: Response, next: NextFunction) => {

}

export const UpdateVandorProfile = async(req: Request, res: Response, next: NextFunction) => {
	
}