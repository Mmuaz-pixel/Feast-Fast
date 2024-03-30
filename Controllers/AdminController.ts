import { Request, Response, NextFunction } from "express"
import { CreateVandorInput } from "../dto/Vandor.dto"

export const CreateVandor = async(req: Request, res: Response, next: NextFunction) => {

	const {name, address, pincode, } = <CreateVandorInput>req.body; // using dto (data transfer object) to get specific object things from our req
}

export const getVandors = async(req: Request, res: Response, next: NextFunction) => {

}

export const getVandorById = async(req: Request, res: Response, next: NextFunction) => {

}

