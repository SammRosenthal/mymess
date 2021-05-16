const express = require("express");
const forumRouter = require("./forum/router");
require("dotenv").config({ path: "./.env" });
const app = express();

app.use("/forum", forumRouter);

app.listen(8080, () => console.log(`server running on localhost: ${8080}`));
