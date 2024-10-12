import express from 'express';
import userController from "../controllers/userController.js";
import authToken from '../middlewares/authentication.js';



const userRoutes = express.Router();
 
userRoutes.get('/users',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), userController.SelectAllUsers );
userRoutes.get('/users/:id',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), userController.selectUserById)
userRoutes.post('/registerUser',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), userController.registerUser);
userRoutes.put('/users/:id',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), userController.updateUser);
userRoutes.delete('/deleteUser/:id',authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), userController.deleteUser);


export default userRoutes;
