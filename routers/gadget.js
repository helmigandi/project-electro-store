const express = require('express');
const router = express.Router();
const Controller = require('../controllers/GadgetController.js');

router.get('/', Controller.getReadAllGadgetHandler);
router.get('/add', Controller.getCreateGadgetHandler);
router.get('/delete/:id', Controller.gettDeleteGadgetHandler);
router.get('/update/:id', Controller.getUpdateGadgetHandler);
router.get('/search', Controller.getSearchGadgetHandler);

router.post('/add', Controller.postCreateGadgetHandler);
router.post('/update/:id', Controller.postUpdateGadgetHandler);

module.exports = router;