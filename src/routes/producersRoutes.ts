import { Router } from 'express';
import { createProducer, deleteProducer, listProducers, updateProducer } from '../controllers/ProducersController';

export const routes = Router();

routes.get('/producers', listProducers);
routes.post('/producers', createProducer);
routes.put('/producers/:id', updateProducer);
routes.delete('/producers/:id', deleteProducer);