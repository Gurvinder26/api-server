import * as express from 'express';
import * as userController from '../controllers/user-controller';

// export class userRoutes {

const router = express.Router();
// constructor() {
router.get('/', userController.getUser);
router.post('/', userController.createNewUser);
router.get('/:id', userController.getUserById);
//     }
// }

 export const userRoutes =  router;