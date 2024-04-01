import { Request, Response, NextFunction } from "express"
import { VandorLoginInput } from "../dto"
import { Vandor } from "../Models";
import { GenerateSignature, ValidatePassword } from "../Utility";

export const VandorLogin = async(req: Request, res: Response, next: NextFunction) => {

	const {email, password} = <VandorLoginInput>req.body; 

	const existingVandor = await Vandor.findOne({email: email})

	if(existingVandor)
	{
		const check = await ValidatePassword(password, existingVandor.password, existingVandor.salt)

		if(check)
		{
			const token = GenerateSignature({
				_id: existingVandor.id, 
				name: existingVandor.name, 
				email: existingVandor.email, 
				foodTypes: existingVandor.foodType
			})

			return res.json(token); 
		}
		else 
		{
			return res.json({"message": "incorrect credentials"}); 
		}
	}
}

export const GetVandorProfile = async(req: Request, res: Response, next: NextFunction) => {

	const user = req.user; 
	if(user)
	{
		const existingVandor = await Vandor.findById(user._id); 
		if(existingVandor)
		{
			return res.json(existingVandor); 
		}
		else 
		{
			return res.json
		}
	}
}

export const UpdateVandorProfile = async(req: Request, res: Response, next: NextFunction) => {
	
}

export const UpdateVandorService = async(req: Request, res: Response, next: NextFunction) => {
	
}