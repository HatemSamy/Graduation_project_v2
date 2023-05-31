import { Router } from "express";
import * as malariaController from "./controller/malaria.js"
import auth from "../../middleware/auth.js"
import endpoint from "./malaria.endpoint.js"
import { fileValidation, myMulter } from "../../services/multer.js";
const router =Router()



router.post("/",auth(endpoint.test),myMulter(fileValidation.image).single("image"),malariaController.malariaTest)
router.get("/",auth(endpoint.test),malariaController.malariaRecord)
router.delete("/:id",auth(endpoint.test),malariaController.DeletemalariaRecord)




export default router