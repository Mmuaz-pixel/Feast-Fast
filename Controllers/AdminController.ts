import { Request, Response, NextFunction } from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"
import { Vandor } from "../Models";
import { GeneratePassword, GenerateSalt } from "../Utility";

export const CreateVandor = async(req: Request, res: Response, next: NextFunction) => {

	const {name, address, pincode, phone, email, foodType, ownerName, password} = <CreateVandorInput>req.body; // using dto (data transfer object) to get specific object things from our req

	const exist = await Vandor.findOne({email: email})
	if(exist)
	{
		return res.status(400).json({"message": "A vandor with this email already exists"})
	}

	const salt = await GenerateSalt(); 
	const hashedPassword = await GeneratePassword(password, salt); 


	const createVandor = await Vandor.create({
		name,
		address, 
		pincode, 
		phone, 
		email, 
		foodType, 
		ownerName, 
		password: hashedPassword, 
		salt, 
		coverImages: [], 
		rating: 0, 
		serviceAvailable: false, 
	}) 	

	return res.json(createVandor); 
}

export const getVandors = async(req: Request, res: Response, next: NextFunction) => {

	const vandors = await Vandor.find(); 
	return res.json(vandors); 
}

export const getVandorById = async(req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id; 
	const vandor = await Vandor.findById(id); 

	if(!vandor)
	{
		return res.status(404).send({"message": `vandor with id ${id} doesn't exist`})
	}

	return res.json(vandor); 
}

