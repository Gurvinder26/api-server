import * as express from 'express';
import * as userController from './user-controller';
import * as carInfoController from '../car-info/car-info-controller';


const router = express.Router();
router.get('/', userController.getUser);
router.post('/', userController.createNewUser);
router.get('/:id', userController.getUserByEmailId);
router.get('/:id/cars', carInfoController.getCarsByOwnerId )

export const userRoutes =  router;