import express from 'express';
import colors from'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
//test object
//confiqure env
dotenv.config();
//configure database
connectDB();

//create express app


const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth/',authRoute);

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to food ordering app</h1>");
});
//port
const PORT = process.env.PORT || 8080;
//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});
