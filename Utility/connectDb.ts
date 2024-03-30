import mongoose from "mongoose"
export const connectDb = async() => { 
	console.clear(); 
	await mongoose.connect(process.env.MONGO_URI as string).then(result=>{
		console.log('mongo connected')
	}).catch(error=>{
		console.log(error); 
	})
}