import { Sequelize } from 'sequelize';
import userModel from "../models/userModel.js";
import AboutUsModel from '../models/aboutUsModels.js';
import contactUsModel from '../models/contactUsModel.js';
import servicesModel from '../models/servicesModel.js';

const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USER,   
    process.env.PASSWORD, 
    {
        host: process.env.HOST,   
        dialect: 'mysql'           
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize the user model
db.user = userModel(sequelize, Sequelize);
db.aboutUs = AboutUsModel(sequelize, Sequelize);
db.contacUs = contactUsModel(sequelize, Sequelize);
db.services = servicesModel(sequelize, Sequelize);


export default db;
