import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "./token.js";

export const auth = {
    register: (req, res)=>{

    },

    login: async (req, res)=>{
        // console.log(req.body);
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

            const payload = {
                id: user._id,
                email: user.email,
                role: user.role || 'user'
            }
        
            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload);
        
            // console.table([accessToken, refreshToken]);
        
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