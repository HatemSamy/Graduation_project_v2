
import { Router } from "express";
import * as userRouter from "./controller/user.js"
import auth from "../../middleware/auth.js"
import endpoint from "./user.endpoint.js";
const router=Router()


router.get("/" ,auth(endpoint.desplay),userRouter.displayUser)







export default router