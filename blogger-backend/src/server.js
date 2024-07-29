//imports
import { configDotenv } from 'dotenv';
import express from 'express';
import authRoute from "./routes/authRoute.js";
import conn from './db.js';
import cors from 'cors';

//server
configDotenv();
const server = express();
const port = process.env.PORT || 4000;


//middleware
server.use(express.json());
server.use(cors())
server.use('/', authRoute);
// server.get('/', (req, res)=>{
//     res.send('hello world');
// })

conn();
server.listen(port, ()=>{
    console.log(`server listening to port: http://localhost:${port}/`);
})