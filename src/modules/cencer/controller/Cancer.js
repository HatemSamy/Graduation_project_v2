import { asynchandiler } from "../../../services/errorHandling.js";
import CancerModel from "../../../../DB/model/Cancer.model.js";
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";



export const CancerTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await create({model:CancerModel,data:req.body})

   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetCancerRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await find({filter:{userID:_id},model:CancerModel})

  if (!Record) {
    return next(new Error("not found any CancerTest "))
  } else {
    return res.status(201).json({message:"your CancerTest ",Record})
  }

})



export const deleteCancerRecord=asynchandiler(async(req,res,next)=>{
  const {id}=req.params
  
  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:CancerModel})

 
   if (!Record) {
     return  next(new Error("not found any CancerRecord "))
   } else {
     return res.status(201).json({message:`your CancerRecord whith Id:${id} has been deleted`})
   }
 
 })
