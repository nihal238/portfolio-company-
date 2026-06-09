const mongoose =require('mongoose');

const postSchema = new mongoose.Schema({
    yourname: String,
    work_email: String,
    company: String,
    estimated_budget: String,
    tell_me_about_youer_porject:  String
});
const postmodel = mongoose.model('post', postSchema);

module.exports = postmodel;    
