import * as express from "express";
import * as carInfoController from "./car-info-controller";
const checkAuth = require("../../auth/check-auth");

const router = express.Router();
router.get("/", checkAuth, carInfoController.getAllCars);
router.post("/", checkAuth, carInfoController.addNewCar);
router.get("/:id", checkAuth, carInfoController.getCarByVin);

export const carInfoRoutes = router;
