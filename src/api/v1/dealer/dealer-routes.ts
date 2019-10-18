import * as express from "express";
import * as dealerController from "./dealer-controller";
import * as dealerTimingsController from "./dealer-timings/dealer-timings-controller";

const checkAuth = require("../../auth/check-auth");

const router = express.Router();
router.get("/", checkAuth, dealerController.getAllDealers);
router.post("/", dealerController.addNewDealer);
router.get("/timings/:id", dealerTimingsController.getDealerTimings);
router.post("/timings/:id", dealerTimingsController.addNewDealerTiming);

export const dealerRoutes = router;
