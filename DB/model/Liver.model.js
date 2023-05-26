

import {model,Schema,Types} from "mongoose"


const LiverSchema=new Schema({
  age:Number,
  sex:Boolean,
  total_bilirubin:Number,
  alkaline_phosphotase:Number,
  alamine_aminotransferase:Number,
  albumin_and_globulin_ratio:Number,
  resualt:String,
  userID:{
    type:Types.ObjectId,
    ref:"User"
  }
})

const LiverModel= model("Liver",LiverSchema)
export default LiverModel