'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductCategories extends Model {
        static associate(models) {
            ProductCategories.belongsTo(models.Categories, {
                foreignKey: 'category_id',
                as: 'categories'
            });
            ProductCategories.belongsTo(models.Products, {
                foreignKey: 'product_id',
                as: 'products'
            });
        }
    };
    ProductCategories.init({
        category_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProductCategories',
        tableName: 'product_categories',
        underscored: true
    });
    return ProductCategories;
};