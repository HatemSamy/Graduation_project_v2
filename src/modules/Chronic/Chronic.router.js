import { Router } from "express";
import * as CancerController from "./controller/Chronic.js"
import auth from "../../middleware/auth.js"
import endpoint from "./Chronic.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),CancerController.ChronicTest)
router.get("/",auth(endpoint.test),CancerController.GetChronicRecord)

router.delete("/:id",auth(endpoint.test),CancerController.deleteChronicRecord)


export default router