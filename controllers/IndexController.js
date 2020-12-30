const { Gadget, Customer } = require('../models');
const formatPrice = require('../helpers/currency.js');

class IndexController {
  static getListGadgetHandler(req, res) {
    let savedGadgetData;
    let threePopularGadgets;
    /**
     * Get all Data Gadget frpm table Gadget and
     * Get total Customer form table Customer
     * with Promise Chaining
     */
    Gadget.findAll({ include: Customer })
      .then(gadgetData => {
        savedGadgetData = gadgetData;
        threePopularGadgets = Gadget.getPopularGadget(gadgetData);
        return Customer.count()
      })
      .then(totalCustomer => {
        res.render('index', { 
          gadgetData: savedGadgetData, 
          totalCustomer, 
          formatPrice, 
          threePopularGadgets 
        });
      })
      .catch(err => { res.send(err.message) });
  }
  
}

module.exports = IndexController;