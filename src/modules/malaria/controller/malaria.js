import { create, find, findOneAndDelete } from "../../../../DB/DBMethods.js";
import malariaModel from "../../../../DB/model/malaria.model.js";
import cloudinary from "../../../services/cloudinary.js";
import { asynchandiler } from "../../../services/errorHandling.js";





export const malariaTest = asynchandiler(async (req, res, next) => {

  if (!req.file) {
    next(new Error("image is require"))
  } else {
    req.body.userID = req.user._id

    const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path, { folder: "GraduationProject/malaria/" })
    req.body.image = secure_url
    req.body.imagePublicId = public_id
    console.log(secure_url, public_id);

    const Test = await create({model:malariaModel,data:req.body})

    if (!Test) {
      return next(new Error("fail to create test"))
    } else {
      return res.status(201).json({ message: "create malaria sccessfuly", Test })
    }

  }

})


export const malariaRecord = asynchandiler(async (req, res, next) => {
  const { _id } = req.user

  const Record = await find({filter:{userID:_id},model:malariaModel})

  if (!Record) {
    return next(new Error("not found any malariaTest "))
  } else {
    return res.status(201).json({ message: "your malariaTests ", Record })
  }

})

export const DeletemalariaRecord = asynchandiler(async (req, res, next) => {
  const { id } = req.params


  const  Record= await findOneAndDelete({filter:{userID:req.user._id,_id:id},model:malariaModel})

  const image= await cloudinary.uploader.destroy(Record.imagePublicId)
              
  if (!Record) {
    return next(new Error("not found any malariaRecord "))
  } else {
    return res.status(201).json({ message: `your  malariaRecord whith Id:${id} has been deleted` })
  }

})






