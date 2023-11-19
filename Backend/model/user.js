// user.js

import mongoose from "mongoose";

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 100,
  },
  number: {
    type: String,
    required: true,
    minlength: 10, // You can adjust the minimum password length as needed
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // You can adjust the minimum password length as needed
  },
  // You can add more fields to the user schema as needed
});

// Create and export the User model
let registration= mongoose.model('registration', userSchema);
export default registration;
