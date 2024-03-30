const express = require('express'); 
require('dotenv').config(); 
const app = express(); 

app.listen(process.env.PORT, ()=>{
	console.log('App running on PORT ', process.env.PORT); 
})