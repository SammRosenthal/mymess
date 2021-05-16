const express = require("express");
const router = express.Router();
const forumLogic = require("./logic.js");

router.get("/", async (req, res) => {
  // TODO: route to business logic
  //       that will handle posts
  const allPosts = await forumLogic.getAllPosts(res);
  res.json(allPosts);
});

module.exports = router;
