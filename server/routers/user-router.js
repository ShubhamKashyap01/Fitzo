import express  from "express";
import { createUser, getUserBookings, updateUser, validateUser } from "../domain/user-domain.js";

const router = express.Router();


router.post('/create', async (req, res) => {
  try{
    const userDetails = req.body;
    const data = await createUser(userDetails);
    return res.json({
      status: 'Success',
      message: "User created succesfully",
      data: data
    })
  }
  catch(error){
    res.status(400).send(error.message);
  }
});

router.post('/login', async  (req, res) => {
  try{
    const {email, password} = req.body;
    const data = await validateUser(email, password);
    return res.json({
      status: 'Success',
      message: "User created succesfully",
      data: data
    })
  }
  catch(error){
    res.status(400).send(error.message);
  }
})

router.put('/update', async (req, res) => {
  try{
    const userDetails = req.body;
    const data = await updateUser(userDetails);
    return res.json({
      status: 'Success',
      message: "User updated succesfully",
      data: data
    })
  }
  catch(error){
    res.status(400).send(error.message);
  }
})

//Get slots for a user
router.get("/slot/:userid", async (req, res) => {
    try {
      const { userid } = req.params;
      const slotBookings = await getUserBookings(
        userid
      );
      res.json({
        status: "SUCCESS",
        message: "Fetched Succesfully",
        data: slotBookings,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

export default router;