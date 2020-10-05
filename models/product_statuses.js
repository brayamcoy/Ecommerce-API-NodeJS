'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductStatuses extends Model {

        static associate(models) {
            ProductStatuses.hasOne(models.Products, {
                foreignKey: 'id',
                as: 'products'
            });
        }
    };
    ProductStatuses.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ProductStatuses',
        tableName: 'product_statuses',
        underscored: true
    });
    return ProductStatuses;
};