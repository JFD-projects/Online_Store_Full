const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  cost: Number,
  countProduct: Number,
  image: String,
}, {
  timestamps: true
})

module.exports = model('Products', schema)