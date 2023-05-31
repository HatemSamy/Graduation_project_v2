import { Router } from "express";
import * as ChronicController from "./controller/Cancer.js"
import auth from "../../middleware/auth.js"
import endpoint from "./Cancer.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),ChronicController.CancerTest)
router.get("/",auth(endpoint.test),ChronicController.GetCancerRecord)
router.delete("/:id",auth(endpoint.test),ChronicController.deleteCancerRecord)




export default router