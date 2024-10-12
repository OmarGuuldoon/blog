import express from "express";
import commentsController from "../controllers/commentsController.js";
import authToken from "../middlewares/authentication.js";


const commentRoutes = express.Router();

commentRoutes.post('/posts/:post_id/comments', authToken.AuthenticationToken, commentsController.createComment);
commentRoutes.get('/posts/:post_id/comments', authToken.AuthenticationToken,commentsController.getComments);
commentRoutes.delete('/comment/:comment_id', authToken.AuthenticationToken,authToken.RoleBasedAuthorization(['admin']), commentsController.deletedComments);


export default commentRoutes;