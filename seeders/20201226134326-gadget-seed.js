'use strict';

const dataGadgets = [
  {
    name: "Lenovo Yoga Slim 7 14ARE05 82A20008GE",
    description:
      `AMD Ryzen 7 4700U 
      AMD Radeon RX Vega 7 
      Memory 16384 MB, LPDDR4X-4266 
      Display 14.00 inch 16:9, 1920 x 1080 pixel IPS, glossy: yes, 60 Hz
      Storage 1024 GB 1x M.2-2280 NVMe`,
    stock: 5,
    price: 13384724.47
  },
  {
    name: "Macbook Pro M1",
    description:
      `Retina display 13.3-inch (diagonal) LED-backlit 
      display with IPS technology; 
      2560-by-1600 native resolution at 227 pixels per inch 
      8-core CPU with 4 performance cores and 4 efficiency cores
      8GB unified memory
      256GB SSD
      Thunderbolt 3 (up to 40Gb/s)
      USB 3.1 Gen 2 (up to 10Gb/s)
      802.11ax Wi-Fi 6 wireless networking`,
    stock: 10,
    price: 21199999
  }
]

dataGadgets.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Gadgets", dataGadgets, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Gadgets", null, {});
  }
};
