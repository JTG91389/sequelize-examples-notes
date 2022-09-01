'use strict';

const { Person } = require('../models');
const validator = require('validator');

module.exports = {
  async up (queryInterface, Sequelize) {
    const tester = new Person();
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    // this value absolutely must be set to true

    /**
     * NOTE: this will now run unless you have this specific build of sequelize installed. 
     * 
     * https://github.com/JTG91389/sequelize/tree/proposed-fix-validation-on-bulkInsert-6-21-4
     */
    return queryInterface.bulkInsert('People', [
      {
        firstName: 'tyler',
        lastName: 'joe',
        email: 'emailtest.com',
        // email: 'thisis@email.com',
        test: 'something',
        createdAt: createdAt,
        updatedAt: updatedAt
      }
    ], {
      logging: true,
      validateByModel: {
        model: Person,
      }
     },
     {
        email: {
          type: {
            validate: function(item, options) {
              console.log(`Custom validator on test,validating row: ${this} value: ${item}`);
              if (!validator.isEmail(item, options)) {
                throw Error('hey, this validator worked, no row added');
              }
            }
          }
          
        }
     }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('People', null, {});
  }
};
