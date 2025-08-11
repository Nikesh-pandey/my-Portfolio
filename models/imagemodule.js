const mongoose = require('mongoose');
const ImageSchema= new mongoose.Schema({
  filename:{
    type:String,
    required:true,
  },
  path:{
    type:String,
    required:true,
  },
  
mimetype:{
  type:String,
},
size:{
  type:String,
}
},{timestamps:true});
module.exports= mongoose.model("Imagedata",ImageSchema);