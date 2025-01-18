const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  code: { type: String, required: true, unique: true }, // Unique 4-digit code
  profile: {
    age: Number,
    bio: String,
    interests: [String],
    socialLinks: [String],
  },
});

module.exports = mongoose.model("User", UserSchema);
