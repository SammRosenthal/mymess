const express = require("express");
const app = express();
const forumRouter = require("./forum/router");
const PORT = 8080;

app.use("/forum", forumRouter);

app.listen(PORT, () => console.log(`server running on localhost: ${PORT}`));
