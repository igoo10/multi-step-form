import { model, Schema } from "mongoose";
// Create a new schema
const userDetailsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Custom error message for required validation
    unique: true,

  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [emailRegex, 'Please enter a valid email address'], // Validates email format
    lowercase: true, // Stores emails in lowercase
    validate: {
        validator: (email) => {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(email);  // Returns true if valid, false if invalid
        },
        message: 'Invalid email format'
      }
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Phone number is required'],
    match: [phoneRegex, 'Please enter a valid phone number'], // Validates phone number format
    unique: true,
    trim: true,
    minlength: [10, 'Phone number must be at least 10 characters long'], 
    validate: {
        validator: (phoneNumber) => {
          const phoneRegex = /^\+?[1-9]\d{1,14}$/;
          return phoneRegex.test(phoneNumber);  // Returns true if valid, false if invalid
        },
        message: 'Invalid phone number format'
      }
    }
  });

// Create a model based on the schema
export default model('UserDetails', userDetailsSchema);

module.exports = userDetailsSchema;
