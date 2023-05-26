import { asynchandiler } from "../../../services/errorHandling.js";

import ChronicModel from "../../../../DB/model/Chronic.model.js";



export const ChronicTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await ChronicModel.create(req.body)

   if (!Test) {
    return  next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetChronicRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await ChronicModel.find({userID:_id})

  if (!Record) {
    return  next(new Error("not found any ChronicTest "))
  } else {
    return res.status(201).json({message:"your ChronicTest ",Record})
  }

})
