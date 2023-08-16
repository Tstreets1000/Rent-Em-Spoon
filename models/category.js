const { model, Schema } = require('mongoose')

const categorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: { type: Number, required: true }
}, {
  timestamps: true
});

const Category = model('Category', categorySchema);

module.exports = Category