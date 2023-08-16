const Item = require('../../models/item').Item;

module.exports = {
	index,
	show,
	update,
	destroy
};

function jsonItem(_, res) {
	res.json(res.locals.data.todo)
}

function jsonItems(_, res) {
	res.json(res.locals.data.todos)
}

/****** C - Create ********/
async function create(req, res, next){
    try {
        const item = await Item.create(req.body)
        res.locals.data.item = item
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read ********/
async function index(req, res, next) {
	try {
		const items = await Item.find({}).sort('name').populate('category').exec();
		// re-sort based upon the sortOrder of the categories
		items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
		res.status(200).json(items);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const item = await Item.findById(req.params.id);
		res.status(200).json(item);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

/****** U - Update ********/
async function update(req, res, next){
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.locals.data.item = item
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** D - Destroy/Delete ********/
async function destroy(req, res, next){
    try {
        const item = await Item.findByIdAndDelete(req.params.id)
        res.locals.data.item = item
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}