const { Gadget } = require('../models');
const formatPrice = require('../helpers/currency.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class GadgetController {
  static getReadAllGadgetHandler(req, res) {
    Gadget.findAll()
      .then(gadgetData => {
        res.render('listGadget', { gadgetData, formatPrice });
      })
      .catch(err => { res.send(err.message) });
  }

  static getCreateGadgetHandler(req, res) {
    let errors = [];
    let dataValue = {}
    if (req.query.errors) {
      errors = req.query.errors.split(',');
      dataValue.name = req.query.name;
      dataValue.price = req.query.price;
      dataValue.stock = req.query.stock;
      dataValue.description = req.query.description;
    }
    res.render('formAddGadget', { errors, dataValue });
  }

  static postCreateGadgetHandler(req, res) {
    const { name, price, stock, description } = req.body;

    Gadget.create({ name, price, stock, description })
      .then(() => {
        res.redirect("/gadgets")
      })
      .catch(errorData => {
        // res.send(err.errors[0].instance);
        const errMessages = errorData.errors.map(err => { return err.message })
        // res.send(errMessages);
        const { name, price, stock, description } = errorData.errors[0].instance
        // res.send(name + description)
        res.redirect(`/gadgets/add?errors=${errMessages}&name=${name}&price=${price}&stock=${stock}&description=${description}`);
      });
  }

  static getUpdateGadgetHandler(req, res) {
    const gadgetId = new Number(req.params.id);

    Gadget.findOne({
      where: { id: gadgetId }
    })
      .then(gadgetData => {
        res.render('formUpdateGadget', { gadgetData });
      })
      .catch(err => {
        res.send(err.message);
      });
  }

  static postUpdateGadgetHandler(req, res) {
    const { name, price, stock, description } = req.body;
    const gadgetId = req.params.id;

    Gadget.update({ name, price, stock, description }, {
      where: { id: gadgetId }
    })
      .then(() => {
        res.redirect('/gadgets');
      })
      .catch(err => {
        res.send(err.message);
      });
  }

  static gettDeleteGadgetHandler(req, res) {
    const gadgetId = new Number(req.params.id);

    Gadget.destroy({
      where: { id: gadgetId }
    })
      .then(() => {
        res.redirect('/gadgets')
      })
      .catch(err => {
        res.send(err.message)
      });
  }

  static getSearchGadgetHandler(req, res) {
    let { term } = req.query;

    // Make all words Lower Case
    //term = term.toLowerCase();

    // Make first char capitalize in every word
    // function capitalizeFirstLetter (dataTest){
    //   return dataTest
    //     .toLowerCase()
    //     .split(' ')
    //     .map(word => word[0].toUpperCase() + word.slice(1))
    //     .join(' ');
    // }

    // the problem we must make input name become lowercase
    // before save to database.
    // So, we can show to client with CSS:
    // text-transform:capitalize;

    // Make first Char Capital at first word
    term = term[0].toUpperCase() + term.slice(1);

    Gadget.findAll({ where: { name: { [Op.like]: '%' + term + '%' } } })
      .then(gadgetData => res.render('listGadget', { gadgetData, formatPrice }))
      .catch(err => res.send(err.message))
  }
}

module.exports = GadgetController;