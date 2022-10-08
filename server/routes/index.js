import { Router } from "express";
import registerController from "../controller/auth/registerController.js";
const router = Router();

router.post("/register", registerController.register);

export default router;
