import express from "express";
import { getAllUsers, getUserById, login, profile, register } from "../controller/user.auth.js";
import { authMiddleware, authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
// admin routes:
router.get("/users/:id",authMiddleware, authorize("admin"), getUserById);
router.get("/users", authMiddleware, authorize("admin"), getAllUsers);

export default router;