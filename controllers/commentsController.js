import { where } from 'sequelize';
import db from '../models/indexModel.js';

const commentModel = db.commentModel; 
const postModel = db.postModel;

const createComment = async (req, res) => {
    try {
        const {content} = req.body;
        const {post_id} = req.params;

        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized. Please login to comment."
            });
        }


        const post = await postModel.findByPk(post_id);
        if (!post) {
            return res.status(404).json({
                message: "Post not found."
            });
        }

        const newComment = await commentModel.create({
            content,
            post_id: post_id,
            user_id: req.user.id  
        });

        return res.status(201).json({
            message: "Comment created successfully.",
            comment: newComment
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const getComments = async (req, res) => {
    try {
        const { post_id } = req.params;


        const post = await postModel.findByPk(post_id);
        if (!post) {
            return res.status(404).json({
                message: "Post not found."
            });
        }

        const comments = await commentModel.findAll({
            where: { post_id },
            // include: [
            //     { 
            //         model: db.userModel,
            //         attributes: ['username'] 

            //     }
            // ]
        });

        return res.status(200).json({
            message: "Comments fetched successfully.",
            comments
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const deletedComments = async (req, res) => {
    try {
        const {comment_id} = req.params;
    
        const comment = await commentModel.findByPk(comment_id);
        console.log(comment);

    if(!comment) {
        return res.json({
            message : "Comment not found"
        })
    }

    await comment.destroy();

    return res.json({
        message : "comment deleted succesfully"
    });
  }
  catch (error) {
    res.status(500).json({
        message : error.message
    });
  }
    
}


export default {createComment,getComments, deletedComments};