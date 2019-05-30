import * as express from 'express';
import * as userController from '../controllers/user-controller';

const router = express.Router();
router.get('/', userController.getUser);
router.post('/', userController.createNewUser);
router.get('/:id', userController.getUserById);

export const userRoutes =  router;