const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


function jsonUser(_, res) {
  res.json(res.locals.data.order)
}

function jsonUsers(_, res) {
  res.json(res.locals.data.order)
}


const checkToken = (req, res) => {
	console.log('req.user', req.user);
	res.json(req.exp);
};

const dataController = {
	async auth(req, res, next) {
		try {
			const token = req.header('Authorization').replace('Bearer ', '');
			const data = jwt.verify(token, process.env.SECRET);
			const user = await User.findOne({ _id: data._id });
			if (!user) {
				throw new Error('Bad Credentials');
			}
			req.user = user;
			next();
		} catch (error) {
			res.status(401).json({ message: error.message });
		}
	},

	async create(req, res, next) {
		try {
			const user = await User.create(req.body);
			console.log(req.body, user);
			// token will be a string
			const token = createJWT(user);
			console.log(token);
			// send back the token as a string
			// which we need to account for
			// in the client
			res.locals.data.user = user;
			res.locals.data.token = token;
			next();
		} catch (e) {
			console.log('you got a database problem');
			res.status(400).json({ message: e.message });
		}
	},

  async allUsers(req, res, next) {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (error) {
      res.status(400).json({ message: error.message  })
    }
  },

  async show(req, res, next){
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
  },

	async login(req, res, next) {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) throw new Error();
			const match = await bcrypt.compare(req.body.password, user.password);
			if (!match) throw new Error();
			res.locals.data.user = user;
			res.locals.data.token = createJWT(user);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},

  async update(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
		res.locals.data.user = user
		next()
    } catch (error) {
        res.status(400).json({ message: error.message  })  
    }
  },

  async delete (req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.locals.data.user = user
        res.status(204)
        res.send('Thanos Snap!')
    } catch (error) {
        res.status(400).json({ message: error.message  })
    }
  }

};

const apiController = {
	auth(req, res) {
		res.json(res.locals.data.token);
	}
};

module.exports = {
	checkToken,
	dataController,
	apiController
};

/* -- Helper Functions -- */

function createJWT(user) {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
