import { asynchandiler } from "../../../services/errorHandling.js";

import DiabetesModel from "../../../../DB/model/Diabetes.model.js"



export const DiabetesTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await DiabetesModel.create(req.body)

   if (!Test) {
    return  next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetDiabetesRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await DiabetesModel.find({userID:_id})

  if (!Record) {
    return  next(new Error("not found any DiabetesTest "))
  } else {
    return res.status(201).json({message:"your DiabetesTests ",Record})
  }

})
