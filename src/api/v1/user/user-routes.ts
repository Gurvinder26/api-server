import * as express from "express";
import * as userController from "./user-controller";
import * as carInfoController from "../car-info/car-info-controller";

const checkAuth = require("../../auth/check-auth");

const router = express.Router();
router.get("/", checkAuth, userController.getUser);
router.post("/", userController.createNewUser);
router.get("/:id", checkAuth, userController.getUserById);
router.get("/:id/cars", checkAuth, carInfoController.getCarsByOwnerId);
router.post("/login", userController.loginUser);

export const userRoutes = router;
