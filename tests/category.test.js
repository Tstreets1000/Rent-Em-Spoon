const request = require("supertest")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app")
const server = app.listen(8083, () => console.log("We taking over!"))
const Category = require("../../models/category")
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})
  
afterEach(async () => {
    await Category.deleteMany() 
})
  
afterAll(async () => {
    await mongoose.connection.close() // programmatic ctrl+c
    mongoServer.stop() // getting rid of our mongodb instance itself
    server.close()
})