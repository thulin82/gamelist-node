const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    //console.log(`MongoDB Connected`);
};

module.exports = connectDB;
