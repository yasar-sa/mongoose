import express from "express";
const router = express.Router();
import User from "../models/User.js";
import validateUser from "../middleware/validateUser.js";



// CREATE USER
router.post("/users",validateUser, async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// READ ALL USERS
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// READ SINGLE USER
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});


// UPDATE USER
router.put("/users/:id", validateUser, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// DELETE USER
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

//THIS USES AGGREGATION TO GET USER DETAILS WITH ADDRESS
// from user model to address model

// router.get("/users-with-address", async (req, res) => {
//   try {

//     const users = await User.aggregate([
//       {
//         $lookup: {
//           from: "addresses",       
//           localField: "_id",       
//           foreignField: "userId",  
//           as: "address" 
//         }
//       },
//       {
//         $match: {
//           address: { $ne: [] }     // filter users with address only
//         }
//       }
//     ]);

//     res.json(users);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });



//users with address using virtual populate method

router.get("/users-with-address", async (req, res) => {
  try {

    const users = await User
      .find()
      .populate("address");

    const filteredUsers = users.filter(user => user.address.length > 0);

    res.json(filteredUsers);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});


export default router;