import { Router } from "express";
import { registerUser } from "../controllers/userRegister.controller.js";
import { loginUser } from "../controllers/userLogin.controller.js";
import userProfile from "../controllers/userProfile.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";
import updateProfile from "../controllers/userUpdate.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, userProfile);
router.put("/update", verifyToken, updateProfile);

export default router;
