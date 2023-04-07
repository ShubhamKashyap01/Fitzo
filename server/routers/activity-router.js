const express = require("express");
const router = express.Router();

activityModel = require("../models/activityModel");

router.get("/", (req, res) => {
  activityModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

router.get("/:name", (req, res) => {
  activityModel
    .find({name:req.params.name})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(500, err);
    });
});

router.post("/create", (req, res) => {
  const activity = new activityModel(req.body);
  activity
    .save()
    .then(() => {
      res.send(200, "inserted"+ ' ' + activity);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

router.put("/update/:id", (req, res) => {
  const activity = new activityModel({
    _id: req.params.id,
    name: req.body.name,
    location: req.body.location,
  });
  activityModel
    .updateOne({_id: req.params.id}, activity)
    .then(() => {
      res.send(200, "inserted"+ ' ' + activity);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

module.exports = router;
