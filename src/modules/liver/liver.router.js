import { Router } from "express";
import * as liverController from "./controller/liver.js"
import auth from "../../middleware/auth.js"
import endpoint from "./liver.endpoint.js"
const router =Router()



router.post("/",auth(endpoint.test),liverController.liverTest)
router.get("/",auth(endpoint.test),liverController.GetliverRecord)
router.delete("/:id",auth(endpoint.test),liverController.deleteliverRecord)




export default router