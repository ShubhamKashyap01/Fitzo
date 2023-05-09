import axios from "axios";

export const bookSlot = async (
  slotId: string,
  userId: string,
  date: Date,
  activityname: string
) => {
  try {
    const res = await axios.post("/slot/add-user", {
      date: date,
      activityname: activityname,
      slotid: slotId,
      userid: userId,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

//get activities by locaiton
export const getActivitiesByLocation = async (location: string) => {
  try {
    const res = await axios.get(`/activities/location/${location}`);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};
