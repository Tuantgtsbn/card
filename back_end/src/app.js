const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
// Load biến môi trường
dotenv.config({});

// Khởi tạo express app
const app = express();

// Kết nối database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Static file
app.use(express.static(path.join(__dirname, 'public')));
// Routes cơ bản
const { routes } = require('./routes');
routes(app);

// Định nghĩa port
const PORT = process.env.PORT || 5000;

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});