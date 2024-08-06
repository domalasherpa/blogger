import User from "../models/User.js";

export const userController = {
    getUserProfile: async(req, res)=>{
        let filter;
        if(req.params.username){
            filter = {username: req.params.username};
        }
        else{
            filter = {_id: req.user.id};
        }
        
        try{
            const user = await User.findOne(filter);
            console.log(user);
            await user.populate('blogs');
            console.log(user.blogs);
            if(user){
                return res.status(200).json({success:true, user: user});
            }
            else{
                return res.status(400).json({success: false, message: 'User doesnot exist'});
            }
        }
        catch(err){
            console.log(err.message);
            return res.status(500).json({success: false, message: 'Something went wrong on our side. Please try again later.'});
        }
    },
    updateUserProfile: async(req, res)=>{
        
    },
    deleteUserProfile:async(req, res)=>{

    }
}