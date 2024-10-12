    import { Sequelize } from "sequelize";
    import userModel from './userModel.js';

    const comment = (sequelize, Sequelize) => {
        return sequelize.define("comments", {
            content : {
                type : Sequelize.TEXT,
                allowNull : true
            },
            post_id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                reference : {
                    model : "posts",
                    key : "id"
                },
            },
            user_id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                reference : {
                    model : "users",
                    key : "id"
                },
            }
        },{
            timestamps : true,
            createdAt : "created_at",
            updatedAt : false
        }
    );
    }



    export default comment;