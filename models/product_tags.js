'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductTags extends Model {

        static associate(models) {
            ProductTags.belongsTo(models.Products, {
                foreignKey: 'product_id',
                as: 'products'
            });
            ProductTags.belongsTo(models.Tags, {
                foreignKey: 'tag_id',
                as: 'tags'
            });
        }
    };
    ProductTags.init({
        product_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProductTags',
        tableName: 'product_tags',
        underscored: true
    });
    return ProductTags;
};