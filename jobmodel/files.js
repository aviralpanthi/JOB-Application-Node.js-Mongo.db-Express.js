const mongoose = require("mongoose");
const data = new mongoose.Schema({
    // name: {
    //     type: String,
    //     trim: true,
    //     unique: true,
    //     required: [true,'Name is required'],
    //     minLength:[3,'Name must be atleast 3 characters long'],
    //     maxLength: [20,'Name must not exceet 20 characters'],
    // },
   
    title:{
        type: String,
          trim: true,
          unique: true,
          required: [true,'Title is required'],
          minLength:[3,'Title must be atleast 3 characters long'],
          maxLength: [20,'Title must not exceet 20 characters'],
    },
    description: {
          type: String,
          trim: true,
          unique: true,
          
          
    },
    place:{
        type: String,
        trim: true,
        unique: true,
       
    } ,
    salary: {
        type: Number,
        trim: true,
        unique: true,
        
    },
    experience: {
        type: String,
        trim: true,
        unique: true,
    },
    designation: {
        type: String,
        trim: true,
        unique: true,
    },
    applicants: {
        type: Number,
        trim: true,
        unique: true,
    },
    jobtype: {
        type: String,
        trim: true,
        unique: true,
    },
    openingdate: {
        type: String,
        trim: true,
        unique: true,
    },
    closingdate:{
        type: String,
        trim: true,
        unique: true,
    },

},
{timestamps:true}
);
module.exports = mongoose.model("files", data);