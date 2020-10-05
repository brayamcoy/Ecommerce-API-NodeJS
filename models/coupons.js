'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coupons extends Model {

        static associate(models) {
            Coupons.hasMany(models.SalesOrders, {
                foreignKey: 'id',
                as: 'sales_orders'
            });

        }
    };
    Coupons.init({
        code: DataTypes.STRING,
        description: DataTypes.TEXT,
        active: DataTypes.BOOLEAN,
        value: DataTypes.INTEGER,
        multiple: DataTypes.BOOLEAN,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Coupons',
        tableName: 'coupons',
        underscored: true
    });
    return Coupons;
};