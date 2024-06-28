const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://echo:echo@cluster0.vw1iokm.mongodb.net/todoapp');
    console.log('MongoDB bağlantısı kuruldu!');
  } catch (error) {
    console.error('MongoDB bağlantısı kurulamadı:', error);
    process.exit(1);
  }
};

module.exports = dbConnection;
