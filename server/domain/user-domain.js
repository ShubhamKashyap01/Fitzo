import SlotLogModel from "../models/slotLogModel.js";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

//Create User
async function createUser(userDetails) {
  try {
    const user = await UserModel.findOne({ email: userDetails.email });
    if(user){
      throw Error("User already exists with same email");
    }
    const newUser = new UserModel(userDetails);
    const result = await newUser.save();
    return result;
  } catch (error) {
    throw error;
  }
}

//Login User
async function validateUser(email, password) {
  try {
    console.log(email, password)
    const user = await UserModel.findOne({ email: email });
    console.log('user', user)
    if (!user) {
      throw Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw Error("Invalid password");
    }
    const token = jwt.sign({ email: user.email }, "secret");
    return { token };
  } catch (error) {
    throw error;
  }
}

async function getUserBookings(userid) {
  try {
    const slotBookings = await SlotLogModel.find({ usersBooked: userid });
    if (!slotBookings) {
      throw Error("Error retrieving slot bookings");
    }
    return slotBookings;
  } catch (error) {
    throw Error(error);
  }
}

export { getUserBookings, validateUser, createUser};
