
let User = (sequelize, Sequelize) => {
    return sequelize.define("users", {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('user', 'admin'),  
        defaultValue: 'user',                    
        allowNull: false                         
      },
    }, {
      timestamps: true,        
      createdAt: 'created_at',   
      updatedAt: false    
    });
  };
  
  export default User;
  