import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
  unique: true
},
  street: String,
  pincode: String,
  country: String
});

export default mongoose.model("Address", addressSchema);