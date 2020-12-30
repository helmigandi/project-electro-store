const express = require('express');
const router = express.Router();
const Controller = require('../controllers/IndexController.js');
const gadgetRouter = require('./gadget.js');

router.get('/', Controller.getListGadgetHandler);
router.use('/gadgets', gadgetRouter);

module.exports = router;