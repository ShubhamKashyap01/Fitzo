const mongoose = require("mongoose");

const activity = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: [{ city_name: String, slots: [{id:String, start_time: String, capacity: Number}] }],
    required: true,
    trim: true,
  },
});

const ActivityModel = mongoose.model("Activity", activity);

module.exports = ActivityModel;
