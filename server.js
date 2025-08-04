const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express(); // ✅ Server initialized

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://abhinavtiwarics23:eT8sULhnYVf6NBej@Cluster0.9xvolgv.mongodb.net/ecommerceDB?retryWrites=true&w=majority')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));



// Routes
app.use('/', productRoutes);

// Port setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
