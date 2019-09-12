import * as express from "express";
import * as serviceOptionController from "./service-options-controller";

const router = express.Router();
router.get("/", serviceOptionController.getServiceOptions);
router.post('/', serviceOptionController.addNewServiceOption);
router.get("/:id", serviceOptionController.getServiceOptionById);

export const serviceOptionRoutes = router;
