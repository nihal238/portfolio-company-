const monegoose = require('mongoose'); 
async function connectDB() {
  
        await monegoose.connect(process.env.mongodb_url)  
      console.log("connected to database"); 
    } 
module.exports = connectDB;
    
