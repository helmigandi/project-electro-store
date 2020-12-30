'use strict';

const dataCustomerGadgets = [
  {
    GadgetId: 1,
    CustomerId: 1,
    status: "pending",
    description: "Menunggu konfirmasi",
    amount: 2
  },
  {
    GadgetId: 2,
    CustomerId: 1,
    status: "pending",
    description: "Menunggu konfirmasi",
    amount: 1
  },
  {
    GadgetId: 2,
    CustomerId: 2,
    status: "pending",
    description: "Menunggu konfirmasi",
    amount: 1
  }
]

dataCustomerGadgets.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CustomerGadgets", dataCustomerGadgets, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("CustomerGadgets", null, {});
  }
};
