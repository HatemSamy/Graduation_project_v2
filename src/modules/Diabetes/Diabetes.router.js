import { Router } from "express";
import * as DiabetesController from "./controller/Diabetes.js"
import auth from "../../middleware/auth.js"
import endpoint from "./Diabetes.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),DiabetesController.DiabetesTest)
router.get("/",auth(endpoint.test),DiabetesController.GetDiabetesRecord)



export default router