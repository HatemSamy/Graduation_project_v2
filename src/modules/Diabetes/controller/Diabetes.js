import { asynchandiler } from "../../../services/errorHandling.js";

import DiabetesModel from "../../../../DB/model/Diabetes.model.js"
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";



export const DiabetesTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await create({model:DiabetesModel,data:req.body})

   if (!Test) {
    return  next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetDiabetesRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record=  await find({filter:{userID:_id},model:DiabetesModel})

  if (!Record) {
    return  next(new Error("not found any DiabetesTest "))
  } else {
    return res.status(201).json({message:"your DiabetesTests ",Record})
  }

})

export const deleteDiabetesRecord=asynchandiler(async(req,res,next)=>{
  const {id}=req.params
  
  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:DiabetesModel})
 
   if (!Record) {
     return  next(new Error("not found any DiabetesRecord "))
   } else {
     return res.status(201).json({message:`your DiabetesRecord whith Id:${id} has been deleted`})
   }
 
 })
