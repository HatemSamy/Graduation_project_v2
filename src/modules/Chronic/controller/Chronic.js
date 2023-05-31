import { asynchandiler } from "../../../services/errorHandling.js";

import ChronicModel from "../../../../DB/model/Chronic.model.js";
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";



export const ChronicTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await create({model:ChronicModel,data:req.body})

   if (!Test) {
    return  next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetChronicRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await find({filter:{userID:_id},model:ChronicModel})

  if (!Record) {
    return  next(new Error("not found any ChronicTest "))
  } else {
    return res.status(201).json({message:"your ChronicTest ",Record})
  }

})



export const deleteChronicRecord=asynchandiler(async(req,res,next)=>{
  const {id}=req.params
  
  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:ChronicModel})

   if (!Record) {
     return  next(new Error("not found any ChronicTest "))
   } else {
     return res.status(201).json({message:`your ChronicTest whith Id:${id} has been deleted`})
   }
 
 })