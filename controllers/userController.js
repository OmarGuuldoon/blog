import { where } from 'sequelize';
import db from '../models/indexModel.js';
import bcrypt from 'bcryptjs';
// creating user
const User = db.user;

const registerUser = async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        let password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const role = req.body.role;

        if(password !== confirmPassword) {
           return  res.json({
                message : "password does not match"
            });
        }
        password = bcrypt.hashSync(req.body.password, 8);

        const user = await User.create({
            username,
            email,
            password,
            role: role || 'user', 
        });
       res.json({
        message : "User has been registered successfully" + user
       });
    } catch (error) {
        res.status(500).send({
            message : error.message
        })
    }
}
// updating user
const updateUser = async (req, res) => {
    try {
        
        const{id} = req.params;
        const {username, email, password, role} = req.body;

        const user = await User.findByPk(id);


        if(!user){
          return  res.json({
                message : "user not found"
            })
        }

        if(username) user.username = username;
        if(email) user.email = email;
        if(password) user.password = bcrypt.hashSync(password, 8);
        if(role) user.role = role;

        await user.save();
        res.json({
            message : "User updated successfuly"
        })
    } 
    catch (error){
        res.status(500).send({
            message : error.message
        })
    }
}
// deleting user
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);

        if(!user){
            return res.json({
                message : "user does not exist"
            })
        }
    
        await user.destroy();
    
        res.json({
            message : "user has been deleted succesfully"
        })
    }
    catch(error){
      res.status(500).send({
        message : error.message
      })
    }

}
// selecting all users

const SelectAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({
            users
        })
    }
    catch(error) {
        res.status(500).send({
            message : error.message
        })
    }
}
// selecting user by id
const selectUserById = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findByPk(id);
    
        if(!user){
            res.json({
                message : "user not found"
            })
        }
    
        res.send({
            user
        })
    }
    catch (error) {
      res.json({
        message : error.message
      })
    }

}

export default {registerUser, updateUser, deleteUser, SelectAllUsers, selectUserById};
