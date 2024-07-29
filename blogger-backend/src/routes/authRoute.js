import { Router } from "express";
import { testJWT } from "../test.js";
import { auth } from "../controller/auth.js";

const authRoute = Router();

authRoute.get('/', (req, res)=>{
    res.send('hello');
})

authRoute.get('/register', (req, res)=>{ //regiter
     res.send('sucessfully registered.');
});


authRoute.get('/token', async(req, res)=>{ ///login

    const data = await testJWT();
    console.log(data);

    return res.json({success: true, data: data});
});


authRoute.post('/login', auth.login);

authRoute.post('/token/refresh', (req, res)=>{ //revive the expried accesstoken
    const refreshToken = req.body.refreshToken;

    if(!refreshToken){
        return res.sendStatus(401);
    }

    const result = verifyRefreshToken(refreshToken);

    if(!result.success){
        return res.status(403).json({error: result.error});
    }

    const user = result.data;
    const newAccessToken = generateAccessToken(user);
    res.json( {accessToken: newAccessToken });
})


export default authRoute;


/**
 * 
 * 
 * basic flow
 * - let the url refirect work from the client side using react js
 * - user register then after sucesssful registration check for the suces messgae in the react frontend 
 * - refdirect uuser to the login from the frontend
 * - then after the ffront end user login send it to the backend /token
 * - user middleware to verify the user and then send the payload along the way then
 * - send the payload as the json
 * - user saves the payload in the localstorage and then send it with every request
 * - client verifies the life of the token and automatically send the refresh token if access token is not valid.
 * - use middleware for authentication and authorization
 * - maintain separate concerns for different user, 
 * ------ view how to implement authorixation in the node js
 * 
 */