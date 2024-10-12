import { Sequelize } from 'sequelize';
import userModel from "../models/userModel.js";
import AboutUsModel from '../models/aboutUsModels.js';
import contactUsModel from '../models/contactUsModel.js';
import servicesModel from '../models/servicesModel.js';
import postModel from '../models/postModel.js';
import commentModel from '../models/commentsModel.js';

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
db.postModel = postModel(sequelize, Sequelize);
db.commentModel = commentModel(sequelize, Sequelize);


db.commentModel.belongsTo(db.user, { foreignKey: 'user_id' }); 
db.user.hasMany(db.commentModel, { foreignKey: 'user_id' });    

db.postModel.hasMany(db.commentModel, { foreignKey: 'post_id' });   
db.commentModel.belongsTo(db.postModel, { foreignKey: 'post_id' }); 

db.postModel.belongsTo(db.user, { foreignKey: 'user_id' });
db.user.hasMany(db.postModel, { foreignKey: 'user_id' });

export default db;
