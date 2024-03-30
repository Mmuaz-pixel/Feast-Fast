const express = require('express'); 
import bodyParser from 'body-parser'; 
require('dotenv').config(); 
import { AdminRouter, VandorRouter } from "./Routes";

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); // exposing the form-data or files/images to req.body 

app.use('/admin', AdminRouter); 
app.use('/vandor', VandorRouter); 

app.listen(process.env.PORT, ()=>{
	console.clear(); 
	console.log('App running on PORT ', process.env.PORT); 
})