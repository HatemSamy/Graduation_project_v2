

import {model,Schema,Types} from "mongoose"


const DiabetesSchema=new Schema({

  Pregnancies:Number,
    Glucose:Number,
    BloodPressure:Number,
    SkinThickness:Number,
    Insulin:Number,
    BMI:Number,
    DiabetesPedigreeFunction:Number,
    Age:Number,
    resualt:String,
    userID:{
      type:Types.ObjectId,
      ref:"User"
    }

})

const DiabetesModel= model("Diabetes",DiabetesSchema)
export default DiabetesModel