const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
		name: { type: String, required: true },
		emoji: {type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		price: { type: Number, required: true, default: 0 }
	}, {
		timestamps: true
	}
);

const Item = model('Item', itemSchema);

module.exports = {Item, itemSchema}
