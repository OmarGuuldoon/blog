import db from "../models/indexModel.js";


const postModel = db.postModel;

const createPost = async (req, res) => {
    try {
        const {title, content, image_url} = req.body;
        if(!req.user) {
            return res.status(401).json({
                message : "Un Authorized please login"
            });
        }

        
        const newPost = await postModel.create({
            title,
            content,
            image_url,
            user_id : req.user.id
        });
        console.log(newPost);
        return res.status(201).json({
            message : "Post created succesfully",
            post : newPost
        });
    }
    catch (error) {
        res.status(500).json({
            message : "Internal Server Error"
        });
    }
}
const updatePost = async (req, res) =>{
    try {
        const {id} = req.params;
    const {title, content, image_url} = req.body;

    const post = await postModel.findByPk(id);

    if(!post) {
        return res.json({
            message : "Post doesnot exist"
        });
    }
    res.json ( {
        message : "post saved succesfully",
        post
    })
    post.title = title;
    post.content = content;
    post.image_url = image_url;
    
    await post.save();
    }
    catch (error)
    {
        res.status(500).json(
            {
                message : error.message
            }
        )
    }
}

const deletePost = async (req, res) => {
    try {
        const {id} = req.params;

    const post = await postModel.findByPk(id);

    if(!post){
        return res.json({
            message: "post not found"
        })
    }

    await post.destroy();
    res.json({
        message : "post deleted succussfully"
    });
    }
    catch (error){
        res.status(500).json({
            message : error.message
        });
    }
}

const selectPosts = async (req, res) => {
    try {
        const post = await postModel.findAll();

        if(!post) {
            res.status(404).json({
                message : "there are no posts in the database "
            })
        }
        return await res.json({
            message : post
        })
    }
    catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

const selectPost = async (req, res) => {
    try { 
        const {id} = req.params;
        const post = await postModel.findByPk(id);
        if(!post) {
            return res.json({
                message : "post not found"
            });
        }
        return await res.json({
            message : "selected post",
            post,
        });
    }
    catch(error) {
        res.status(500).json({
            message : error.message
        });
    }
}
export default {createPost, updatePost, deletePost, selectPosts, selectPost};