const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ADMIN = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    default: "admin",
  },
}, { timestamps: true });

// Pre-save hook to hash password before saving
ADMIN.pre('save', async function(next) {
  if (!this.isModified('password')) return next();  // only hash if password is new or modified and basically we use async function because only using raw bcrypt hash function then the CPU can take more time and may cause slow to server thats why we use async
//  if the password is new or modified the try block will execute if not then next(); will execute
  try {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("admindataa", ADMIN);
