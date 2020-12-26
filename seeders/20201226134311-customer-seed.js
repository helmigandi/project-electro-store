'use strict';

const dataCustomers = [
  {
    name: "Ajeng Mindari",
    address:
      "Jalan Raya Abadi 1 No 23, RT/RW 03/002, Kecamatan Rangkas, Kebumen, Jawa Tengah",
    email: "ajeng05@gmail.com",
    password: "admin"
  },
  {
    name: "Sanusi Karim",
    address:
      "Jl. Maju Jaya 35 No 193 RT 09 RW 84 Kecamatan Jati Bening, Bogor, Jawa Barat",
    email: "sans01@gmail.com",
    password: "admin"
  }
]

dataCustomers.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", dataCustomers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  }
};
