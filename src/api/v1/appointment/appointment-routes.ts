import * as express from "express";
import * as appointmentController from "./appointment-controller";
const checkAuth = require("../../auth/check-auth");

const router = express.Router();
// router.get("/", checkAuth, carInfoController.getAllCars);
router.post("/", checkAuth, appointmentController.addNewAppointment);
// router.get("/:id", checkAuth, carInfoController.getCarByVin);

export const appointmentRoutes = router;
