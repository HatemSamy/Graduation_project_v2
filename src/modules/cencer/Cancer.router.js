import { Router } from "express";
import * as ChronicController from "./controller/Cancer.js"
import auth from "../../middleware/auth.js"
import endpoint from "./Cancer.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),ChronicController.CancerTest)
router.get("/",auth(endpoint.test),ChronicController.GetCancerRecord)



export default router