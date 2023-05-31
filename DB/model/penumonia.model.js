
import {model,Schema,Types} from "mongoose"


const penumoniaSchema=new Schema({
  image:String,
  imagePublicId:String,
  resualt:String,

  userID:{
    type:Types.ObjectId,
    ref:"User"
    
  }
})

const penumoniaModel= model("penumonia",penumoniaSchema)
export default penumoniaModel