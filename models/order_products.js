'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderProducts extends Model {

        static associate(models) {

            OrderProducts.hasOne(models.SalesOrders, {
                foreignKey: 'order_id',
                as: 'sales_orders'
            });
        }
    };
    OrderProducts.init({
        order_id: DataTypes.INTEGER,
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        quantity: DataTypes.DECIMAL,
        subtotal: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'OrderProducts',
        tableName: 'order_products',
        underscored: true
    });
    return OrderProducts;
};