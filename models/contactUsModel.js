import { Sequelize } from "sequelize";

let contactUs =  (sequelize, Sequelize) => {
    return  sequelize.define("contact_us",{
        name : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        },
        message : {
            type : Sequelize.TEXT,
            allowNull : false
        }
    },{
        timestamps : true,
        createdAt : 'created_at',
        updatedAt : false
    });
}

export default contactUs;