const express = require("express");
const path = require("path");

const app = express();

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


app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
