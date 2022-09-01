'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Person.init({
    firstName: {
      // don't add constraints yet
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    test: {
      type: DataTypes.STRING,
      validate: {
      testValidate: function(value) {
        // if test's value is test, this will throw an error
        console.log(`Custom validator on test,validating row: ${this} value: ${this.test}`);
        if (this.test === 'test') {
          throw Error('hey, this validator worked, no row added');
        }
        return;
      }
    }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Person'
  });
  return Person;
};