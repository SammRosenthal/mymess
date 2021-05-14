const express = require("express");
const router = express.Router();
const forumLogic = require("./logic.js");

router.get("/", (req, res) => {
  // TODO: route to business logic
  //       that will handle posts
  forumLogic.getAllPosts();
  res.sendStatus(200);
});

module.exports = router;
