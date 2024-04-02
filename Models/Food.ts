import mongoose, {Document, Schema} from "mongoose";

interface FoodDoc extends Document {
	vandorId: string; 
	name: string; 
	description: string; 
	category: string; 
	foodType: string; 
	readyTime: string; 
	price: Number; 
	rating: Number; 
	images: [string]; 
}

const foodSchema = new Schema({
	vandorId: {
		type: mongoose.Schema.ObjectId, 
		required: true
	} , 
	name: {
		type: String, 
		required: true
	},
	description: String,
	category: {
		type: String,
		required: true
	}, 
	foodType: {
		type: String,
		required: true
	}, 
	readyTime: String, 
	price: {
		type: Number, 
		required: true
	}, 
	rating: {
		type: Number, 
		default: 0
	},  
	images: [{
		type: String
	}]
}, {
	toJSON: {
		transform(doc, ret){
			delete ret.__v, 
			delete ret.createdAt, 
			delete ret.updatedAt
		}
	}, 
	timestamps: true

})

const Food = mongoose.model<FoodDoc>('food', foodSchema); 

export {Food}