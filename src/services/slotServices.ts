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
