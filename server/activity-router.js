import express from "express";
import ActivityModel from "./models/activityModel.js";

const router = express.Router();

//Get all activites
router.get("/", (req, res) => {
  ActivityModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

//Get all activities by location
router.get("/location/:location", (req, res) => {
  const location = req.params.location;
  const query = { "location.city_name": location };
  ActivityModel.find(query)
    .then((data) => {
      const result = data.map((activity) => {
        activity.location = activity?.location.filter((loc) => {
          return loc.city_name === location;
        });
        return { name: activity?.name, slots: activity?.location?.[0]?.slots };
      });
      return res.json(result);
    })
    .catch((err) => res.status(500).send(err));
});

//Get slots of an activity by location
router.get("/:activity/location/:location", (req, res) => {
  const name = req.params.name;
  const location = req.params.location;
  const query = { name: name, "location.city_name": location };
  ActivityModel.find(query)
    .then((data) => {
      const result = data.map((activity) => {
        activity.location = activity?.location.filter((loc) => {
          return loc.city_name === location;
        });
        return { name: activity?.name, slots: activity?.location?.[0]?.slots };
      });
      return res.json(result?.[0]);
    })
    .catch((err) => res.status(500).send(err));
});

//Create a new activity
router.post("/", async (req, res) => {
  const activity = new ActivityModel();
  activity.name = req.body.name;
  activity.location = [];
  const query = { name: req.body.name };
  try {
    const existingActivity = await ActivityModel.findOne(query);
    console.log(existingActivity);
    if (existingActivity) {
      res.status(400).send("Activity already exists");
    } else {
      activity
        .save()
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => res.status(500).send(err));
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//Add new slot to a activity by location
router.post("/slot", async (req, res) => {
  const location = req.body.location;
  const name = req.body.name;
  const slot = req.body.slot;
  let query = { name: name };
  // try {
  //Check if activity exists
  const existingActivity = await ActivityModel.findOne(query);
  if (existingActivity) {
    // console.log("activity exists");
    query = { ...query, "location.city_name": location };
    const existingLocation = existingActivity?.location?.filter(
      (loc) => loc?.city_name === location
    );
    //Check if location exists
    if (existingLocation) {
      console.log(existingLocation, "location exists");
      query = { ...query, "location.slots.start_time": slot.start_time };
      const existingSlot = existingLocation?.[0]?.slots?.filter(
        (sl) => sl?.start_time === slot.start_time
      );
      //Check if slot exists
      if (existingSlot) {
        // console.log("slot exists");
        res.status(400).send("Slot already exists");
      } else {
        const slot_id = location?.slice(0, 3).toUpperCase() + slot.start_time;
        existingActivity.location?.forEach((loc) => {
          if (loc.city_name === location) {
            loc.slots.push({
              id: slot_id,
              start_time: slot.start_time,
              capacity: slot?.capacity || 0,
            });
          }
        });
        // res.status(200).send("Save");
        existingActivity
          .save()
          .then((data) => res.json(data))
          .catch((err) => res.status(400).send(err));
      }
    } else {
      //Create a new location with the slot
      const slot_id = `${location?.slice(0, 3).toUpperCase()}${
        slot.start_time
      }`;
      existingActivity.location.push({
        city_name: location,
        slots: [
          {
            id: slot_id,
            start_time: slot.start_time,
            capacity: slot?.capacity || 0,
          },
        ],
      });
      existingActivity
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).send(err));
    }
  } else {
    res.status(400).send("Activity does not exist");
  }
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

export default router;
