import mongoose from "mongoose";

// Define schema
const ActivityLogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  treadmill_hours: {
    type: Number,
    default: 0,
  },
  cycling_hours: {
    type: Number,
    default: 0,
  },
  weight_training_hours: {
    type: Number,
    default: 0,
  },
});

// Create model
const ActivityLogModel = mongoose.model("ActivityLog", ActivityLogSchema);

export default ActivityLogModel;
