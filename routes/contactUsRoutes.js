import express from 'express';
import contactUsController from '../controllers/contactUsController.js';
import authToken from '../middlewares/authentication.js';

const contactUsRoutes = express.Router();

contactUsRoutes.post('/createContactUs', contactUsController.createContactUsInfo);
contactUsRoutes.get('/viewContactInfo',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), contactUsController.veiwContactUsInfo);


export default contactUsRoutes;