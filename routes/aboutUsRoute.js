import express from 'express';
import aboutUsController from '../controllers/aboutUsControllers.js';

const aboutUsRoutes = express.Router();

aboutUsRoutes.post('/createContent', aboutUsController.createAboutUs);
aboutUsRoutes.get('/getContent', aboutUsController.selectAllContentInABoutUs);




export default aboutUsRoutes;