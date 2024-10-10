import express from 'express';
import contactUsController from '../controllers/contactUsController.js';

const contactUsRoutes = express.Router();

contactUsRoutes.post('/createContactUs', contactUsController.createContactUsInfo);
contactUsRoutes.get('/viewContactInfo', contactUsController.veiwContactUsInfo);


export default contactUsRoutes;