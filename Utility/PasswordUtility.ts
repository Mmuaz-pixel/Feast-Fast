import bcrypt from 'bcrypt'; 

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