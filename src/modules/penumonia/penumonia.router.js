import { Router } from "express";
import * as penumoniaController from "./controller/penumonia.js"
import auth from "../../middleware/auth.js"
import endpoint from "./penumonia.endpoint.js"
import { fileValidation, myMulter } from "../../services/multer.js";
const router =Router()



router.post("/",auth(endpoint.test),myMulter(fileValidation.image).single("image"),penumoniaController.penumoniaTest)
router.get("/",auth(endpoint.test),penumoniaController.penumoniaRecord)
router.delete("/:id",auth(endpoint.test),penumoniaController.Delete_penumoniaRecord)




export default router