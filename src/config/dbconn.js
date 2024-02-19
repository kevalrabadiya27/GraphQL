const mongoose = require('mongoose')
require('dotenv').config()

const dbcoonection = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected...");
    } catch (error) {
        console.log("DB connection ERROR" + error);
    }
}

module.exports = dbcoonection;