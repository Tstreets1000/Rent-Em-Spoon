const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const server = app.listen(8081, () => console.log("Blessed to test!"));
const Order = require("../../models/order");
let mongoServer; // In global Scope for access to all

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await Order.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close(); // programmatic ctrl+c
  mongoServer.stop(); // getting rid of our mongodb instance itself
  server.close();
});