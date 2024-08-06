//imports
import { configDotenv } from 'dotenv';
import express from 'express';
import conn from './db.js';
import cors from 'cors';

//routes import
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";
import userRoute from './routes/userRoute.js';

//server
configDotenv();
const server = express();
const port = process.env.PORT || 4000;


//middleware
server.use(express.json());
server.use(cors())
server.use('/', authRoute);
server.use('/blog', blogRoute);
server.use('/user', userRoute);
// server.get('/', (req, res)=>{
//     res.send('hello world');
// })

conn();
server.listen(port, ()=>{
    console.log(`server listening to port: http://localhost:${port}/`);
})