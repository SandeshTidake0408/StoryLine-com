import { Router } from "express";
import { registerUser } from "../controllers/userRegister.controller.js";
import { loginUser } from "../controllers/userLogin.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
