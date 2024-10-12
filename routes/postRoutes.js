import express from 'express';
import authToken from '../middlewares/authentication.js';
import postController from '../controllers/postControllers.js';


const postRoutes = express.Router();

postRoutes.post('/createPost', authToken.AuthenticationToken, postController.createPost);
postRoutes.put('/updatePost/:id', authToken.AuthenticationToken, postController.updatePost);
postRoutes.delete('/deletePost/:id', authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']),postController.deletePost);
postRoutes.get('/posts', authToken.AuthenticationToken, postController.selectPosts);
postRoutes.get('/posts/:id', authToken.AuthenticationToken, postController.selectPost);
export default postRoutes;
