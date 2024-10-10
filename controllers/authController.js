import db from '../models/indexModel.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from '../config/auth.js';




const User = db.user;
const signup = async (req, res) => {
  try {
      const username = req.body.username;
      const email = req.body.email;
      let password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
      const role = req.body.role;
       
      
       if (password !== confirmPassword) {
        return res.json({
          message : "Passwords does not match."
        })
      }
       
      password = bcrypt.hashSync(req.body.password, 8);
      const user = await User.create({
          username,
          email,
          password,
          role: role || 'user', 
      });
      

      res.json({
        message : "user registered successfully " + user
      });
  } catch (error) {
      res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log("Session before setting userId:", req.session);
    const user = await User.findOne({
      where: {
        username: req.body.username,
      }
    });

    if (!user) {
      return res.status(404).send({
        message: "User Not Found."
      });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Username or Password!"
      });
    }
    req.session.userId = user.id; 
    console.log(req.session.userId);
    req.session.username = user.username; 
    console.log(req.session.username);

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, config.secret, {
      algorithm: 'HS256',  
      expiresIn: 86400,    
    });

    // Return the token and user information
    return res.json({
      message : "user logged in succesfully"
    })
  } catch (error) {
    console.error("Error during login:", error); 
    return res.status(500).send({
      message: "Internal server error"
    });
  }
};

const logOut = async (req, res) =>{
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send({
        message: 'Failed to log out. Please try again.'
      });
    }
    // Clear the session cookie
    res.clearCookie('connect.sid'); 
    return res.json({
      message : "user logged out successfully"
    })
  });
}
export default {signup, login, logOut};
