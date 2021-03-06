'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            sku: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            product_status_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'product_statuses',
                    key: 'id'
                }
            },
            regular_price: {
                type: Sequelize.DECIMAL
            },
            discount_price: {
                type: Sequelize.DECIMAL
            },
            quantity: {
                type: Sequelize.DECIMAL
            },
            taxable: {
                type: Sequelize.BOOLEAN
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('products');
    }
};