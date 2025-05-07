// File: backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected'));

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Contact received: ${name} <${email}> - ${message}`);
  // You can integrate an email service like Nodemailer here
  res.status(200).json({ success: true, message: 'Message received. We will respond shortly!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));

---

