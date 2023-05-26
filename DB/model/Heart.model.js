

import {model,Schema,Types} from "mongoose"


const HeartSchema=new Schema({
  age:Number,
  sex:Boolean,
  cp:Number,
  trestbps:Number,
  chol:Number,
  fbs:Number,
  restecg:Number,
  thalach:Number,
  exang:Number,
  oldpeak:Number,
  slope:Number,
  ca:Number,
  thal:Number,
  resualt:String,
  userID:{
    type:Types.ObjectId,
    ref:"User"
  }

})

const HeartModel= model("Hear",HeartSchema)
export default HeartModel