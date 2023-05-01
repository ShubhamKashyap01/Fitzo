import ActivityModel from "../models/activityModel.js";

export const getAllActivitySlots = async (location) => {
  try {
    const query = { "location.city_name": location };
    const data = await ActivityModel.find(query);
    if (!data) {
      throw Error("Unable to fetch the slots");
    }
    const slots = data?.map((activity) => {
      activity.location = activity?.location.filter((loc) => {
        return loc.city_name === location;
      });
      return {
        name: activity?.name,
        slots: activity?.location?.[0]?.slots,
      };
    });
    if (slots.length == 0) {
      throw Error(`No slots found for ${location}`);
    }
    return slots;
  } catch (error) {
    throw error;
  }
};

export const getActivitySlots = async (activityName, location) => {
  try {
    const query = { name: activityName, "location.city_name": location };
    const data = await ActivityModel.find(query);
    if (!data) {
      throw Error("Unable to fetch the slots");
    }
    console.log('data', data);
    const slots = data.map((activity) => {
      console.log('in', activity);
      activity.location = activity?.location.filter((loc) => {
        return loc.city_name === location;
      });
      return { name: activity?.name, slots: activity?.location?.[0]?.slots };
    });
    if (!slots) {
      throw Error("Unable to fetch the slots for the location");
    }
    if (slots.length == 0) {
      throw Error(`No slots found for the ${activityName} in ${location}`);
    }
    console.log(slots)
    return slots?.[0];
  } catch (error) {
    return error
  }
};
