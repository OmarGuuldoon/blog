import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();
router.get('/signup', (req, res) => {
    res.render('signup'); 
});
router.get('/login', (req, res) => {
    res.render('login'); 
});
router.get('/logout', authController.logOut);
router.post('/register', authController.signup);
router.post('/login', authController.login);


export default router;