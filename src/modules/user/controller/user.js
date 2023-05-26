import userModel from "../../../../DB/model/User.model.js";
import { asynchandiler } from "../../../services/errorHandling.js";




export const displayUser=asynchandiler(async(req,res,next)=>{

const user= await userModel.findById({_id:req.user._id}).select("userName email ")
return res.status(200).json({message:"user profile",user})

})

