const request = require("supertest")
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app")
const server = app.listen(8082, () => console.log("Ready, Set, Test!"))
const Item = require("../../models/item")
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterEach(async () => {
  await Item.deleteMany()
})

afterAll(async () => {
  await mongoose.connection.close() // programmatic ctrl+c
  mongoServer.stop() // getting rid of our mongodb instance itself
  server.close()
})