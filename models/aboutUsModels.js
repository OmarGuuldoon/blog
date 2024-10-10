import { Sequelize } from "sequelize";

let AboutUs  = (sequelize , Sequelize) => {
    return sequelize.define("about_us", {
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        }, 
    },{
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    
}
console.log(AboutUs);
export default AboutUs;