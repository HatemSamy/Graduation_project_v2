import { asynchandiler } from "../../../services/errorHandling.js";
import HeartModel from "../../../../DB/model/Heart.model.js";
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";



export const HeartTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await create({model:HeartModel,data:req.body})

   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetHeartRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await find({filter:{userID:_id},model:HeartModel})

  if (!Record) {
    return next(new Error("not found any HeartTest "))
  } else {
    return res.status(201).json({message:"your HeartTest ",Record})
  }

})


export const deleteHeartRecord=asynchandiler(async(req,res,next)=>{
  const {id}=req.params
  
  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:HeartModel})

 
   if (!Record) {
     return  next(new Error("not found any HeartRecord "))
   } else {
     return res.status(201).json({message:`your HeartRecord whith Id:${id} has been deleted`})
   }
 
 })
