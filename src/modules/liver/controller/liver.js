
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";
import LiverModel from "../../../../DB/model/Liver.model.js";
import { asynchandiler } from "../../../services/errorHandling.js";





export const liverTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await create({model:LiverModel,data:req.body})


   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create livertest sccessfuly",Test})
   }

})


export const GetliverRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await find({filter:{userID:_id},model:LiverModel})

  if (!Record) {
    return  next(new Error("not found any liverTest "))
  } else {
    return res.status(201).json({message:"your liverTests ",Record})
  }

})

export const deleteliverRecord=asynchandiler(async(req,res,next)=>{
  const {id}=req.params
  
  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:LiverModel})

   if (!Record) {
     return  next(new Error("not found any liverRecord "))
   } else {
     return res.status(201).json({message:`your liverRecord whith Id:${id} has been deleted`})
   }
 
 })




