'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SalesOrders extends Model {

        static associate(models) {
            SalesOrders.belongsTo(models.Sessions, {
                foreignKey: 'session_id',
                as: 'sessions'
            });
            SalesOrders.belongsTo(models.Users, {
                foreignKey: 'user_id',
                as: 'users'
            });
            SalesOrders.belongsTo(models.Coupons, {
                foreignKey: 'coupon_id',
                as: 'coupons'
            });
            SalesOrders.belongsTo(models.OrderProducts, {
                foreignKey: 'id',
                as: 'order_products'
            });
            SalesOrders.belongsTo(models.CCTransactions, {
                foreignKey: 'id',
                as: 'cc_transactions'
            });
        }
    };
    SalesOrders.init({
        order_date: DataTypes.DATE,
        total: DataTypes.DECIMAL,
        coupon_id: DataTypes.INTEGER,
        session_id: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SalesOrders',
        tableName: 'sales_orders',
        underscored: true
    });
    return SalesOrders;
};