const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGO_URL

const connectDB = async () => {
    try{
        await mongoose.connect(URL)
            console.log("MongoDB Connected Successfully")  
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {connectDB}