const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
var axios = require("axios");
const FitzoModel = require("./server/models/fitzoModel");
const ActivityModel = require("./server/models/activityModel");

const app = express();
const dbURL =
  "mongodb+srv://admin:admin@cluster0.s6rjw.mongodb.net/Fitzo?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbURL, connectionParams)
  .then(() => {
    console.info("connected to db");
  })
  .catch((e) => {
    console.error(e);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded());

const assetsRouter = require("./server/assets-router");
const userRouter = require("./server/user-router");

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/src", assetsRouter);
app.use("/user", userRouter);

app.get("/api/v1", (req, res) => {
  res.json({
    project: "Fitzo",
    from: "Vanaldito",
  });
});
app.get("/try", (req, res) => {
  ActivityModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500, err);
    });
});

app.post("/try", (req, res) => {
  const activity = new ActivityModel();
  activity.name = "Boxing";
  activity.location = [
    {
      city_name: "Hyd",
      slots: [
        { id: "HYD0600", start_time: "0600", capacity: 100 },
        { id: "HYD0700", start_time: "0700", capacity: 100 },
      ],
    },
  ];
  activity
    .save()
    .then(() => {
      res.send(200, "inserted");
    })
    .catch((err) => {
      res.send(500, err);
    });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
