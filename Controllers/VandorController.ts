import { Request, Response, NextFunction } from "express"
import { EditVandorInput, VandorLoginInput, addFoodInput } from "../dto"
import { Food, Vandor } from "../Models";
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
				foodType: existingVandor.foodType
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
	const {name, foodType, address, phone, coverImages} = <EditVandorInput>req.body; 

	const user = req.user; 

	if(user)
	{
		const existingVandor = await Vandor.findById(user._id); 

		if(existingVandor)
		{
			existingVandor.name = name;
			existingVandor.address = address; 
			existingVandor.foodType = foodType; 
			existingVandor.phone = phone; 
			existingVandor.coverImages = coverImages; 

			const savedVandor = await existingVandor.save(); 

			return res.json(savedVandor); 
		}

		else 
		{
			return res.status(404).json({"message": "user not found"})
		}
	}else 
	{
		return res.status(404).json({"message": "user not found"})
	}
}

export const UpdateVandorService = async(req: Request, res: Response, next: NextFunction) => {
	const user = req.user;

	if(user)
	{
		const existingVandor = await Vandor.findById(user._id); 

		if(existingVandor)
		{
			existingVandor.serviceAvailable = !existingVandor.serviceAvailable; 
			await existingVandor.save(); 
		}

		return res.json(existingVandor); 
	}

	return res.status(404).json({"message": "user not found"}); 
}

export const addFood = async(req: Request, res: Response, next: NextFunction) => {
	const user = req.user; 

	if(user)
	{
		const existingVandor = await Vandor.findById(user._id); 

		if(existingVandor)
		{
			const {name,  
				description, 
				category, 
				foodType, 
				readyTime,  
				price} = <addFoodInput>req.body; 

			const food = await Food.create({
				vandorId: existingVandor._id, 
				name, description, category, foodType, readyTime, price
			})

			existingVandor.foods.push(food._id); 
			const savedVandor = await existingVandor.save(); 

			return res.json(food); 
		}
	}
	return res.status(404).json({"message": "user not found"}); 

}

export const getFood = async(req: Request, res: Response, next: NextFunction) => {
	const user = req.user; 

	if(user)
	{
		const existingVandor = await Vandor.findById(user._id); 

		if(existingVandor)
		{

		}
	}
	return res.status(404).json({"message": "user not found"}); 

}