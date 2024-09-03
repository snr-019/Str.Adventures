import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please provide user's name"],
    minlength: 2
  },
  last_name: {
    type: String,
    required: [true, "Please provide user's name"],
    minlength: 2
  },
  email: {
    type: String,
    required: [true, "Please provide user's email"],
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  phone:{
    type: String,
    required:[true, "Please Provide Phone Number"],
    min: [10, 'Enter Valid Number'],
  },
  address:{
    type:String,
    required:[true,"Please Provide Address"]
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please provide user's passowrd"]
  },
  age: {
    type: Number,
    required: true,
    min: [0, 'Age must be a positive number'],
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  type: {
    type: String,
    required: [true, "Please provide user's type"]
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
})


const userModel = mongoose.model('User', userSchema)
export default userModel

