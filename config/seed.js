require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item').Item;

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Dessert Spoons', sortOrder: 10}, 
    {name: 'Soup Spoons', sortOrder: 10},
    {name: 'Teaspoons', sortOrder: 10},
    {name: 'Drinks', sortOrder: 20},
    {name: 'Soups', sortOrder: 30},
    {name: 'Desserts', sortOrder: 40},
    {name: 'Salads', sortOrder: 50 }
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Dessert Spoon', emoji: "🥄", category: categories[0], price: 5.00}, 
    {name: 'Plastic Soup Spoon', emoji: "🥄", category: categories[1], price: 7.00},
    {name: 'Regular Soup Spoon', emoji: "🥄", category: categories[1], price: 10.00},
    {name: 'Plastic Teaspoon', emoji: "🥄", category: categories[2], price: 7.00},
    {name: 'Regular Teaspoon', emoji: "🥄", category: categories[2], price: 10.00},
    {name: 'Limeonade', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Coke', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Sprite', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Dr. Pepper', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Fanta Orange', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Fanta Grape', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Root Beer', emoji: "🥤", category: categories[3], price: 0.00},
    {name: 'Chicken Noodle Soup', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Italian Wedding Soup', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Minestrone', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Chicken & Rice Soup', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Seafood Gumbo', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Suasage Gumbo', emoji: "🍵", category: categories[4], price: 0.00},
    {name: 'Vanilla Ice Cream', emoji: "🍦", category: categories[5], price: 0.00},
    {name: 'Chocolate Ice Cream', emoji: "🍦", category: categories[5], price: 0.00},
    {name: 'Strawberry Ice cream', emoji: "🍦", category: categories[5], price: 0.00},
    {name: 'Root Beer Float', emoji: "🍦", category: categories[5], price: 0.00},
    {name: 'House Salad', emoji: "🥬", category: categories[6], price: 0.00},
    {name: 'Garden Salad', emoji: "🥬", category: categories[6], price: 0.00},
    {name: 'Cobb Salad', emoji: "🥬", category: categories[6], price: 0.00},
    {name: 'Caesar Salad', emoji: "🥬", category: categories[6], price: 0.00},
  ]);

  console.log(items)

  process.exit();

})();