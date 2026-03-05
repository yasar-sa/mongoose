import express from "express";
const router = express.Router();
import Address from "../models/Address.js";
import User from "../models/User.js";

//create address for user
router.post("/users/:userId/address", async (req, res) => {
  try {

    const existingAddress = await Address.findOne({
      userId: req.params.userId
    });

    if (existingAddress) {
      return res.status(400).json({
        message: "User already has an address"
      });
    }

    const address = new Address({
      userId: req.params.userId,
      street: req.body.street,
      pincode: req.body.pincode,
      country: req.body.country
    });

    const savedAddress = await address.save();

    res.json(savedAddress);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get all addresses
router.get("/users/:userId/address", async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.params.userId });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// read single address
router.put("/address/:id", async (req, res) => {
  try {

    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      {
        street: req.body.street,
        pincode: req.body.pincode,
        country: req.body.country
      },
      { new: true }
    );

    res.json(updatedAddress);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// update address
router.put("/address/:id", async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(updatedAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete address
router.delete("/address/:id", async (req, res) => {
  try {

    await Address.findByIdAndDelete(req.params.id);

    res.json({ message: "Address deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});




// THIS USES POPULATE TO GET USER DETAILS WITH ADDRESS
//FROM ADDRESS MODEL TO USER MODEL

// //users with address
// router.get("/users-with-address", async (req, res) => {
//   try {

//     const usersWithAddress = await Address
//       .find()
//       .populate("userId", "name email age");

//     res.json(usersWithAddress);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });



export default router;
