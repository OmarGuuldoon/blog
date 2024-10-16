const RoleBasedAuthorization = (roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message : "Access denied. Insufficient permission."
            })
        }
        else {
            "acces granted";
            next();
        }
        
    }
}

export default {RoleBasedAuthorization};