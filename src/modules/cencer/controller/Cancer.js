import { asynchandiler } from "../../../services/errorHandling.js";
import CancerModel from "../../../../DB/model/Cancer.model.js";



export const CancerTest=asynchandiler(async(req,res,next)=>{
   req.body.userID=req.user._id
  const Test= await CancerModel.create(req.body)

   if (!Test) {
    return next(new Error("fail to create test"))
   } else {
    return res.status(201).json({message:"create test sccessfuly",Test})
   }

})


export const GetCancerRecord=asynchandiler(async(req,res,next)=>{
 const {_id}=req.user
 
 const  Record= await CancerModel.find({userID:_id})

  if (!Record) {
    return next(new Error("not found any CancerTest "))
  } else {
    return res.status(201).json({message:"your CancerTest ",Record})
  }

})
