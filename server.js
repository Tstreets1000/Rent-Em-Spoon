require('dotenv').config()

require('./config/database')

const app = require('./app-server')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Shoot for the stars and land on the moon ${PORT} miles away`)
})