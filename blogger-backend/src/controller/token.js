import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
// const jwt = jsonwebtoken;


function generateAccessToken(user){
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role || 'user'
        }

        const secret = process.env.SECRET_KEY;
        const options = { expiresIn: '1h' };

        return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token){
    const secret = process.env.SECRET_KEY;

    try{
        const decoded = jwt.verify(token, secret);
        return {success: true, data: decoded};
    }
    catch(err){
        return {success: false, error: err.message};
    }
}

function generateRefreshToken(user){
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role || 'user'
    }

    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '7d' };

    return jwt.sign(payload, secret, options);
}

function verifyRefreshToken(token){
    const secret = process.env.SECRET_KEY;

    try{
        const decoded = jwt.verify(token, secret);
        return { success: true, data: decoded };
    }
    catch(err){
        return { success: false, error: err.message };
    }
}



export {
    generateRefreshToken, 
    generateAccessToken, 
    verifyAccessToken,
    verifyRefreshToken
};