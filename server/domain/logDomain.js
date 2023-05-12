import ActivityLogModel from "../models/logModel.js";

// Create a new activity log
async function createActivityLog(
  user_id,
  date,
  treadmill_hours,
  cycling_hours,
  weight_training_hours
) {
  try {
    const activity = await ActivityLogModel.findOne({ user_id, date });
    if (activity) {
      const res = updateActivityLog(user_id, date, {
        treadmill_hours: activity.treadmill_hours || treadmill_hours,
        cycling_hours: activity.cycling_hours || cycling_hours,
        weight_training_hours: activity.weight_training_hours || weight_training_hours,
      });
      return res;
    } else {
      const activity = new ActivityLogModel({
        user_id,
        date,
        treadmill_hours,
        cycling_hours,
        weight_training_hours,
      });

      const result = await activity.save();
      if (!result) {
        throw new Error(`Cannot create activity`);
      }
      return result;
    }
  } catch (error) {
    throw error;
  }
}

// Update an existing activity log
async function updateActivityLog(user_id, date, updatedFields) {
  try {
    const activity = await ActivityLogModel.findOne({ user_id, date });
    if (!activity) {
      throw new Error(
        `Activity log for user ${user_id} on date ${date.toISOString()} not found.`
      );
    }

    Object.assign(activity, updatedFields);
    const result = await activity.save();
    if (!result) {
      throw new Error(`Cannot update activity log`);
    }
    return result;
  } catch (error) {
    throw error;
  }
}

// Retrieve activity logs for a user within a date range
async function getActivityLogs(user_id, date) {
  try {
    const query = { user_id };
    query.date = date;

    const activityLogs = await ActivityLogModel.find(query);
    if (!activityLogs) {
      throw new Error(`Activity log for user ${user_id} not found.`);
    }
    return activityLogs;
  } catch (error) {
    throw error;
  }
}

export { createActivityLog, updateActivityLog, getActivityLogs };
