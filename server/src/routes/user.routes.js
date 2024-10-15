import { Router } from "express";
import { logInUser, registerUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/update/:userId").put(updateUser);
router.route("/delete/:userId").delete(deleteUser);

export default router;