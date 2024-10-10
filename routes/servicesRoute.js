import express from 'express';
import servicesController from '../controllers/servicesController.js';


const servicesRoute = express.Router();

servicesRoute.post('/createService', servicesController.createService);
servicesRoute.get('/viewAllServices', servicesController.selectAllServices);
servicesRoute.get('/services/:id', servicesController.selectServiceById);
servicesRoute.put('/updateService/:id', servicesController.updatedService);
servicesRoute.delete('/deleteService/:id', servicesController.deleteServiceById);
export default servicesRoute;