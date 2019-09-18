import * as express from "express";
import * as dealerController from "./dealer-controller";
const checkAuth = require("../../auth/check-auth");

const router = express.Router();
router.get("/", checkAuth, dealerController.getAllDealers);
router.post("/", dealerController.addNewDealer);

export const dealerRoutes = router;
