const express = require('express');

const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlCustomer = require('../controllers/customer.controller');
const jwtHelper = require('../config/jwt-helper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userprofile', jwtHelper.verifyJwtToken, ctrlUser.userprofile);
router.post('/addcustomer', jwtHelper.verifyJwtToken, ctrlCustomer.addNewCustomer);
router.get('/landingpage', jwtHelper.verifyJwtToken, ctrlCustomer.getAllData);
module.exports = router;
