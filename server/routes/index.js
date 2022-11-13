import { Router } from 'express';
import { registerController } from '../controller';
const router = Router();

router.post('/register', registerController.register);

export default router;
