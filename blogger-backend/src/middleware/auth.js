import {verifyAccessToken} from "../controller/token.js";

export default function authenticationToken(req, res, next){ // check if the request contains the valid token or not.
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  //authheader: BEARER token

    if(!token){
        return res.sendStatus(401);
    }
    const result  = verifyAccessToken(token);

    if(!result.success){
        return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();
}
