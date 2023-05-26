

import {model,Schema,Types} from "mongoose"

const CancerSchema=new Schema({

  radius_mean:Number,
  area_mean:Number,
  compactness_mean:Number    ,  
  concavity_mean:Number  ,
  cpoints_mean:Number   ,
  area_worst:Number ,
  compactness_worst:Number   ,    
  concavity_worst:Number,
  area_se:Number,
  fractal_dimension_se:Number , 
  symmetry_worst:Number,
  fractal_dimension_worst:Number,
  resualt:String,
  userID:{
    type:Types.ObjectId,
    ref:"User"
  }

})

const CancerModel= model("Cancer",CancerSchema)
export default CancerModel