'use strict'

const Menu = require('../models/Menu');

const CRUD = {
  findAllItems: function(req, res) {
    return Menu.find().then(items => res.json(items));
  },

  findOneItem: function(req, res) {
    return Menu.findOne({
      "_id": req.body.id, "item_name": req.body.item_name
    }).then(item => res.json(item));
  },

  addItem: function(req, res) {
    return Menu.create({
      "item_name": req.body.item_name,
      "item_description": req.body.item_description,
      "thumbnail": req.body.thumbnail,
      "image": req.body.image,
      "flags": req.body.flags,
      "price": req.body.price,
      "discount": req.body.discount,
      "foodGroup": req.body.foodGroup
    }).then(item => res.json(item));
  },

  updateItems: function(req, res) {
    return Menu.update({
      "_id": req.body.id, "item_name": req.body.item_name, "foodGroup": req.body.foodGroup
    }, {
      $set: {
        [req.body.modify]: [req.body.modification]
      }
    }).then(transaction => res.json(transaction));
  },

  deleteItems: function(req, res) {
    return Menu.findOneAndRemove({"_id": req.body.id}).then(transaction => res.json(transaction))
  }
};

module.exports = CRUD;
