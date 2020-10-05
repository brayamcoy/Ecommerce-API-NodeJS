'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            Users.hasMany(models.UserRoles, {
                foreignKey: 'id',
                as: 'user_roles'
            });
            Users.hasMany(models.SalesOrders, {
                foreignKey: 'id',
                as: 'sales_orders'
            });
        }
    };
    Users.init({
        email: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Users',
        tableName: 'users',
        underscored: true
    });
    return Users;
};
