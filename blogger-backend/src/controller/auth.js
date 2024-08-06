import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "./token.js";

export const auth = {
    register: async(req, res)=>{
        const {firstName, lastName, email, username, password} = req.body;
        
        const usernameCheck = await User.findOne({username: username });
        const emailCheck = await User.findOne({email: email});
        
        if(usernameCheck){
            return res.status(403).json({success: false, message: 'username is already taken.'});
        }
        if(emailCheck){
            return res.status(403).json({success: false, message: 'email already registered.'});
        }

        try{
            const user = await User.create(
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    username: username,
                    password: password
                }
            );

            if(user){
                console.log(user);
                return res.status(200).json({success: true, status: '200 user created sucessfully.', message:'user registered sucessfully.'});
            }
        }
        catch(err){
            console.log(err);
            return res.status(500).json({status: '500 Internal Server Error', success: false, message: 'Internal server error'});
        }
    },

    login: async (req, res)=>{
        const {email, password} = req.body;

        try{
            const user = await User.findOne({email: email});
            if(!user){
                res.status(404).json({
                    success: false,
                    message: "Email not found"
                });
                return;
            }

            const validPassword = await bcrypt.compare(
                password, user.password
            );

            if(!validPassword){
                res.status(400).json({
                    message: 'Invalid password',
                    status: '400 Bad Request'
                });
                return;
            }
        
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);
                
            return res.status(200).json(
                    {   success:true, 
                        access: accessToken, 
                        refresh: refreshToken,
                        message: 'sucessfully Logged in'
                    });
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                status: '500 Internal Server Error',
                message: "500 Internal Server Error, User not logged in"
            });
        }

    }
}