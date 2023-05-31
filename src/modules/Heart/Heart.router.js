import { Router } from "express";
import * as HeartController from "./controller/Heart.js"
import auth from "../../middleware/auth.js"
import endpoint from "./Heart.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),HeartController.HeartTest)
router.get("/",auth(endpoint.test),HeartController.GetHeartRecord)
router.delete("/:id",auth(endpoint.test),HeartController.deleteHeartRecord)




export default router