const express = require("express");
const forumRouter = require("./forum/router");
require("dotenv").config({ path: __dirname + "\\.env" });
const app = express();
const PORT = 8080;

app.use("/forum", forumRouter);

app.listen(PORT, () => console.log(`server running on localhost: ${PORT}`));
