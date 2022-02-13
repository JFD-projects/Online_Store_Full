const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  category: {type: String},
  cost: Number,
  countProduct: Number,
  imageProduct: String,
}, {
  timestamps: true
})

module.exports = model('Products', schema)