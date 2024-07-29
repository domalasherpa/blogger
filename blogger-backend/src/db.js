import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';

configDotenv();
const mongodb = process.env.DB_CONN_STRING

export default async function conn(){
    try{
        await mongoose.connect(mongodb);
        console.log("database connected.");
    }
    catch(err){ 
        console.log("failed connecting to database.", err);
    }
}

