import * as express from 'express';
import * as userController from '../controllers/user-controller';
import * as carInfoController from '../controllers/car-info-controller';


const router = express.Router();
router.get('/', userController.getUser);
router.post('/', userController.createNewUser);
router.get('/:id', userController.getUserByEmailId);
router.get('/:id/cars', carInfoController.getCarsByOwnerId )

export const userRoutes =  router;