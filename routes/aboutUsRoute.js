import express from 'express';
import aboutUsController from '../controllers/aboutUsControllers.js';
import authToken from '../middlewares/authentication.js';

const aboutUsRoutes = express.Router();

aboutUsRoutes.post('/createContent',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), aboutUsController.createAboutUs);
aboutUsRoutes.get('/getContent', aboutUsController.selectAllContentInABoutUs);




export default aboutUsRoutes;