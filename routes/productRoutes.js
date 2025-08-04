const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // ✅ Correct path

// Homepage route
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.render('index', { products });
});

// Single product page
router.get('/product/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('product', { product });
});

// ✅ Demo product route
router.get('/add-demo-products', async (req, res) => {
  try {
    await Product.insertMany([
      { name: 'T-Shirt', price: 500, description: 'Comfortable cotton t-shirt' },
      { name: 'Shoes', price: 1500, description: 'Running shoes for men' },
      { name: 'Watch', price: 2500, description: 'Stylish analog watch' }
    ]);
    res.send("✅ Demo products inserted!");
  } catch (err) {
    res.send("❌ Error inserting demo products: " + err.message);
  }
});

module.exports = router;
