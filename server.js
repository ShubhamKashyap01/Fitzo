import express from "express";
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';
// import assetsRouter from "./server/assets-router.js";
import userRouter from "./server/routers/user-router.js";
import activityRouter from "./server/routers/activity-router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//connect monogodb
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



// app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/src", assetsRouter);
app.use("/user", userRouter);
app.use("/activities", activityRouter);

app.get("/api/v1", (req, res) => {
  res.json({
    project: "Fitzo",
    from: "Vanaldito",
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
