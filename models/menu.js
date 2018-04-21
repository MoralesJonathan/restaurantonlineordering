// Initialize Mongoose
const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.Promise = Promise;

// Menu model
const MenuSchema = new Schema({

  // Name and description
  item_name: {
    type: String,
    required: true,
    trim: true
  },
  item_description: {
    type: String,
    trim: true
  },

  // Images
  thumbnail: {
    type: String
  },
  image: {
    type: String
  },

  // Flags
  isGlutenFree: {
    type: Boolean,
    default: false
  },
  isFatFree: {
    type: Boolean,
    default: false
  },
  isVegetarian: {
    type: Boolean,
    default: false
  },
  isVegan: {
    type: Boolean,
    default: false
  },
  isSpicy: {
    type: Boolean,
    default: false
  },
  isSpecialty: {
    type: Boolean,
    default: false
  },

  // Pricing
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },

  // Type of food
  foodGroup: {
    type: String,
    trim: true,
    required: true,
    enum: ['protein', 'topping', 'bread']
  }

  // Special
  toRemove: {
    type: Array
  },
  toAdd: {
    price: {
      type: Number,
      default: 0.00
    },
    ingredient: {
      type: String
    }
  }
})