'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tags extends Model {
        static associate(models) {
            Tags.hasMany(models.ProductTags, {
                foreignKey: 'id',
                as: 'product_tags'
            });
        }
    };
    Tags.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tags',
        tableName: 'tags',
        underscored: true
    });
    return Tags;
};