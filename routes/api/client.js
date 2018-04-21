'use strict'
const express = require('express');
const router = require('express').Router();
const clientController = require("../../controllers/clientController");

router.get('/api/menu', (req, res) => {
  clientController.findAllItems(req, res);
});

router.post('/api/menu', (req, res) => {
  clientController.addItem(req, res);
});

router.put('/api/menu', (req, res) => {
  clientController.updateItems(req, res);
});

router.delete('/api/menu', (req, res) => {
  clientController.deleteItems(req, res);
});

module.exports = router;
