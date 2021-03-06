'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('cc_transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            order_id: {
                type: Sequelize.INTEGER
            },
            transdate: {
                type: Sequelize.DATE
            },
            processor: {
                type: Sequelize.STRING
            },
            processor_trans_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'sales_orders',
                    key: 'id'
                }
            },
            amount: {
                type: Sequelize.DECIMAL
            },
            cc_num: {
                type: Sequelize.STRING
            },
            cc_type: {
                type: Sequelize.STRING
            },
            response: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('cc_transactions');
    }
};