import * as express from 'express';
import * as carInfoController from '../controllers/car-info-controller';

const router = express.Router();
router.get('/', carInfoController.getAllCars);
router.post('/', carInfoController.addNewCar);
router.get('/:id', carInfoController.getCarByVin);

export const carInfoRoutes = router;

