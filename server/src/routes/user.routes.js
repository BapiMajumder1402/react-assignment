import { Router } from "express";
import { logInUser, registerUser, updateUser, deleteUser , getUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(logInUser);
router.route("/:userId").get(getUser);
router.route("/register").post(registerUser);
router.route("/update/:userId").put(updateUser);
router.route("/delete/:userId").delete(deleteUser);

export default router;