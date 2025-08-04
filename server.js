const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express(); // 🔴 ye sabse zaroori line thi!

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://abhinavtiwarics23:MEiUkhEbFJauqmuk@cluster0.9xvolgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use('/', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
