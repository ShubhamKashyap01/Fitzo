import express from "express";
import {
  createActivityLog,
  updateActivityLog,
  getActivityLogs,
  getAllActivityLogsByUser,
} from "./../domain/logDomain.js";

const router = express.Router();

// Create a new activity log
router.post("/", async (req, res) => {
  const {
    user_id,
    date,
    treadmill_hours,
    cycling_hours,
    weight_training_hours,
  } = req.body;

  try {
    const result = await createActivityLog(
      user_id,
      date,
      treadmill_hours,
      cycling_hours,
      weight_training_hours
    );
    res.json({
      STATUS: "SUCCESS",
      message: "Activity log created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an existing activity log
router.put("/", async (req, res) => {
  const { user_id, date, updatedFields } = req.body;

  try {
    const result = await updateActivityLog(user_id, date, updatedFields);

    res.json({
      STATUS: "SUCCESS",
      message: "Activity log updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve activity logs for a user within a date range
router.get("/", async (req, res) => {
  const { user_id, date } = req.body;

  try {
    const activityLogs = await getActivityLogs(user_id, date);
    res.json({
      STATUS: "SUCCESS",
      message: "Activity log retrieved successfully",
      data: activityLogs,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post("/all", async (req, res) => {
  const { user_id } = req.body;

  try {
    const activityLogs = await getAllActivityLogsByUser(user_id);
    res.json({
      STATUS: "SUCCESS",
      message: "Activity log retrieved successfully",
      data: activityLogs,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
