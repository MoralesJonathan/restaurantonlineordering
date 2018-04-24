'use strict'
const express = require('express');
const router = require('express').Router();
const clientController = require("../../controllers/clientController");

router.get('/menu', (req, res) => {
  return clientController.findAllItems(req, res);
});

router.post('/menu', (req, res) => {
  return clientController.addItem(req, res);
});

router.put('/menu', (req, res) => {
  return clientController.updateItems(req, res);
});

router.delete('/menu', (req, res) => {
  return clientController.deleteItems(req, res);
});

module.exports = router;
