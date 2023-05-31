
import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";
import penumoniaModel from "../../../../DB/model/penumonia.model.js";
import cloudinary from "../../../services/cloudinary.js";
import { asynchandiler } from "../../../services/errorHandling.js";





export const penumoniaTest = asynchandiler(async (req, res, next) => {

  if (!req.file) {
    next(new Error("image is require"))
  } else {
    req.body.userID = req.user._id

    const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path, { folder: "GraduationProject/penumonia/" })
    req.body.image = secure_url
    req.body.imagePublicId = public_id
    console.log(secure_url, public_id);

    const Test = await create({model:penumoniaModel,data:req.body})

    if (!Test) {
      return next(new Error("fail to create test"))
    } else {
      return res.status(201).json({ message: "create malaria sccessfuly", Test })
    }

  }

})


export const penumoniaRecord = asynchandiler(async (req, res, next) => {
  const { _id } = req.user

  const Record = await find({filter:{userID:_id},model:penumoniaModel})

  if (!Record) {
    return next(new Error("not found any penumoniaTest "))
  } else {
    return res.status(201).json({ message: "your penumoniaTests ", Record })
  }

})

export const Delete_penumoniaRecord = asynchandiler(async (req, res, next) => {
  const { id } = req.params


  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:penumoniaModel})

  const image= await cloudinary.uploader.destroy(Record.imagePublicId)
              
  if (!Record) {
    return next(new Error("not found any penumoniaRecord "))
  } else {
    return res.status(201).json({ message: `your  penumoniaRecord whith Id:${id} has been deleted` })
  }

})






