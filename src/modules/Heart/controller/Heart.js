import { asynchandiler } from "../../../services/errorHandling.js";

import DiabetesModel from "../../../../DB/model/Diabetes.model.js"
import HeartModel from "../../../../DB/model/Heart.model.js";



export const HeartTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await HeartModel.create(req.body)

   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetHeartRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await HeartModel.find({userID:_id})

  if (!Record) {
    return next(new Error("not found any HeartTest "))
  } else {
    return res.status(201).json({message:"your HeartTest ",Record})
  }

})
