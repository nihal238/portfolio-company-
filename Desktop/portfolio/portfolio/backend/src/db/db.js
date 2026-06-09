const monegoose = require('mongoose'); 
async function connectDB() {
  
        await monegoose.connect("mongodb+srv://admin:PdDdEhefQVBSsAdn@admin.yj6i24x.mongodb.net/database_company")  
      console.log("connected to database"); 
    } 
module.exports = connectDB;
    
