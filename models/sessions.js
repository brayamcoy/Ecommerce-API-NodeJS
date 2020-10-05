'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sessions extends Model {
        static associate(models) {
            Sessions.hasOne(models.SalesOrders, {
                foreignKey: 'id',
                as: 'sales_orders'
            });
        }
    };
    Sessions.init({
        data: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Sessions',
        tableName: 'sessions',
        underscored: true
    });
    return Sessions;
};
