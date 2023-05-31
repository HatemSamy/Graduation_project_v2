
import {model,Schema,Types} from "mongoose"


const malariaSchema=new Schema({
  image:String,
  imagePublicId:String,
  resualt:String,

  userID:{
    type:Types.ObjectId,
    ref:"User"
    
  }
})

const malariaModel= model("Malaria",malariaSchema)
export default malariaModel