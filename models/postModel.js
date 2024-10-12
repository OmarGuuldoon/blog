import { Sequelize } from "sequelize";

let post = (sequelize, Sequelize) => {
    return sequelize.define("posts",{
        title : {
            type : Sequelize.STRING,
            allowNull : false
        },
        content : {
            type : Sequelize.TEXT,
            allowNull : true
        },
        image_url : {
            type : Sequelize.STRING,
            allowNull:true
        },
        user_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
            reference : {
                model : 'users',
                key : 'id',
            },
        }
    },{
        timestamps : true,
        createdAt : "created_at",
        updatedAt : false
    })
}


export default post;