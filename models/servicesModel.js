import { Sequelize } from "sequelize";

const Services = (sequelize, Sequelize) => {
    return sequelize.define("services",{
        title : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        description : {
            type : Sequelize.TEXT,
            allowNull : false,
        },
     }, {
        timestamps : true,
        createdAt : "created_at",
        updatedAt: 'updated_at'
     });
}

export default Services;