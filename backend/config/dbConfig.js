// app.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  
}).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error in connecting to database:', error);
});

const connection = mongoose.connection;

connection.on('error', (error) => {
    console.error('Connection error:', error);
});

module.exports = connection;
