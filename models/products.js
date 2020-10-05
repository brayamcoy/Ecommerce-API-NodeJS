'use strict';
const {Model, DECIMAL} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        static associate(models) {
            Products.hasMany(models.ProductTags, {
                foreignKey: 'id',
                as: 'product_tags'
            });
            Products.belongsTo(models.ProductStatuses, {
                foreignKey: 'product_status_id',
                as: 'product_statuses'
            });
        }
    };
    Products.init({
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        product_status_id: DataTypes.INTEGER,
        regular_price: DataTypes.DECIMAL,
        discount_price: DataTypes.DECIMAL,
        quantity: DataTypes.DECIMAL,
        taxable: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'Products',
        tableName: 'products',
        underscored: true
    });
    return Products;
};