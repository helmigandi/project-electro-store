'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gadget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gadget.belongsToMany(models.Customer, { through: models.CustomerGadget })
    }
    static getPopularGadget(dataGadget) {
      // Collect all custmer number from every gadget
      // ex: [ 1, 2, 0, 0, 0 ]
      const arrTotalCustomers = dataGadget.map(gadget => {
        return gadget.Customers.length
      })
      // sorting from highest number to lower
      // ex: [ 2, 1, 0, 0, 0 ]
      const sortedArrTotalCustomers = arrTotalCustomers.sort((a, b) => b - a);
      // Push all property from 3 data with the highest number
      let threePopularGadgets = [];
      for (let i = 0; i < 3; i++) {
        threePopularGadgets.push(dataGadget.find(element => 
          element.Customers.length === sortedArrTotalCustomers[i]
        ));
      }
      return threePopularGadgets;
    }

    // Get 1 gadget data from the highest sold
    // static getHighestSold(arr){
      // console.log(JSON.stringify(arr[1].Customers.length, null, 2));
      // let numberOfCustomer = arr[0].Customers.length;
      // let idOfGadget = arr[0].id;
      // let popularGadgetData = {}
      // for (let i = 1; i < arr.length; i++) {
      //   if (numberOfCustomer < arr[i].Customers.length) {
      //     numberOfCustomer = arr[i].Customers.length
      //     idOfGadget = arr[i].id;
      //     popularGadgetData = JSON.stringify(arr[i], null, 2);
      //   }
      // }
      // console.log(numberOfCustomer);
      // console.log(idOfGadget);
      // console.log(popularGadgetData);
    // }
  };
  Gadget.init({
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: {
        args: true,
        msg: 'Name cannot empty'
      }}
    },
    description: DataTypes.TEXT,
    stock: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: {
        args: true,
        msg: 'Stock cannot empty'
      }}
    },
    price: {
      type: DataTypes.DECIMAL,
      validate: { notEmpty: {
        args: true,
        msg: 'Price cannot empty'
      }}
    }
  }, {
    sequelize,
    modelName: 'Gadget',
  });
  return Gadget;
};