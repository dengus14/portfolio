
const express = require('express');
const { createForm } = require('../controllers/contact.controller');

const router = express.Router();


router.post('/', createForm);

module.exports = router;
