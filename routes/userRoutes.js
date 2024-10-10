import express from 'express';
import userController from "../controllers/userController.js";



const userRoutes = express.Router();
 
userRoutes.get('/users', userController.SelectAllUsers );
userRoutes.get('/users/:id', userController.selectUserById)
userRoutes.post('/registerUser', userController.registerUser);
userRoutes.put('/users/:id', userController.updateUser);
userRoutes.delete('/deleteUser/:id', userController.deleteUser);


export default userRoutes;
