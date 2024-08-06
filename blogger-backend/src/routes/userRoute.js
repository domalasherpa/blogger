import { Router } from "express";
import { userController } from "../controller/userController.js";
import authenticationToken from "../middleware/auth.js";
const userRoute = Router();

userRoute.get('/', (req, res, next)=>{req.user= {id: '66a454551cac1a054a412913'}; next();},userController.getUserProfile); //user's self profile
userRoute.get('/:username', userController.getUserProfile);
userRoute.post('/', userController.updateUserProfile);
userRoute.delete('/', userController.deleteUserProfile);

export default userRoute;