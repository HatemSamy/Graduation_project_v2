import LiverModel from "../../../../DB/model/Liver.model.js";
import { asynchandiler } from "../../../services/errorHandling.js";





export const liverTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await LiverModel.create(req.body)

   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create livertest sccessfuly",Test})
   }

})


export const GetliverRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await LiverModel.find({userID:_id})

  if (!Record) {
    return  next(new Error("not found any liverTest "))
  } else {
    return res.status(201).json({message:"your liverTests ",Record})
  }

})
