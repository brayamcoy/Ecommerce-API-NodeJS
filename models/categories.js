'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        static associate(models) {
            Categories.belongsTo(models.Categories, {
                foreignKey: 'parent_id',
                as: 'categories'
            });
            Categories.hasMany(models.ProductCategories, {
                foreignKey: 'id',
                as: 'product_categories'
            });
        }
    };
    Categories.init({
        name: DataTypes.STRING,
        parent_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Categories',
        tableName: 'categories',
        underscored: true
    });
    return Categories;
};