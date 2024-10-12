import express from 'express';
import servicesController from '../controllers/servicesController.js';
import authToken from '../middlewares/authentication.js';


const servicesRoute = express.Router();

servicesRoute.post('/createService',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), servicesController.createService);
servicesRoute.get('/viewAllServices', servicesController.selectAllServices);
servicesRoute.get('/services/:id', servicesController.selectServiceById);
servicesRoute.put('/updateService/:id',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), servicesController.updatedService);
servicesRoute.delete('/deleteService/:id',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), servicesController.deleteServiceById);
export default servicesRoute;