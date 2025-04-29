
import { Router } from 'express';
import { teamController } from '../controllers/teamController';

export const teamRoutes = Router();

teamRoutes.post('/', teamController.create);
teamRoutes.get('/', teamController.list);
teamRoutes.get('/:id', teamController.find);
teamRoutes.put('/:id', teamController.update);
teamRoutes.delete('/:id', teamController.remove);
