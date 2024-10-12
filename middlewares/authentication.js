import config from '../config/auth.js';
import jwt from 'jsonwebtoken';

const AuthenticationToken = (req, res, next) => {
    const autHeader = req.headers['authorization'];
    const token =  autHeader && autHeader.split(' ')[1];

    if(!token) {
        return res.json({
            message : "token not fouund"
        })
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(403).json ({
                message : "Invalid token "
            });
        }
        console.log(token);
        req.user = decoded;
        console.log(req.user);
        next();
    })
}
const RoleBasedAuthorization = (roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message : "Access denied. Insufficient permission.",
            })
        }
        else {
            
            console.log("acces granted");
            next();
        }
        
    }
}




export default {AuthenticationToken, RoleBasedAuthorization};