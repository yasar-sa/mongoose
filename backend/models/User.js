import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});


// for api to get user details with address using virtual populate method
userSchema.virtual("address", {
  ref: "Address",
  localField: "_id",
  foreignField: "userId"
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

export default mongoose.model("User", userSchema);