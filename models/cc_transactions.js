'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CCTransactions extends Model {
        static associate(models) {
            CCTransactions.hasOne(models.SalesOrders, {
                foreignKey: 'processor_trans_id',
                as: 'sales_orders'
            });
        }
    };
    CCTransactions.init({
        code: DataTypes.STRING,
        order_id: DataTypes.INTEGER,
        transdate: DataTypes.DATE,
        processor: DataTypes.STRING,
        processor_trans_id: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL,
        cc_num: DataTypes.STRING,
        cc_type: DataTypes.STRING,
        response: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CCTransactions',
        tableName: 'cc_transactions',
        underscored: true
    });
    return CCTransactions;
};