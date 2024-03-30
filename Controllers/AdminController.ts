import { Request, Response, NextFunction } from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"
import { Vandor } from "../Models";

export const CreateVandor = async(req: Request, res: Response, next: NextFunction) => {

	const {name, address, pincode, phone, email, foodType, ownerName, password} = <CreateVandorInput>req.body; // using dto (data transfer object) to get specific object things from our req

	const exist = await Vandor.findOne({email: email})
	if(exist)
	{
		return res.status(400).json({"message": "A vandor with this email already exists"})
	}

	const createVandor = await Vandor.create({
		name,
		address, 
		pincode, 
		phone, 
		email, 
		foodType, 
		ownerName, 
		password, 
		salt: 'random_data', 
		coverImages: [], 
		rating: 0, 
		serviceAvailable: false, 
	}) 	

	return res.json(createVandor); 
}

export const getVandors = async(req: Request, res: Response, next: NextFunction) => {

}

export const getVandorById = async(req: Request, res: Response, next: NextFunction) => {

}

