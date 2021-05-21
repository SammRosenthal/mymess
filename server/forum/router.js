const express = require("express");
const router = express.Router();
const forumLogic = require("./logic.js");

router.get("/", async (req, res) => {
  console.log("Request to gather all forum post.");
  // TODO: route to business logic
  //       that will handle posts
  const allPosts = await forumLogic.getAllPosts(res);
  res.json(allPosts);
});

router.post("/createPost", async (req, res) => {
  console.log("Request to add a forum post to db.");

  const postContent = req.body;
  const responseCode = await forumLogic.addPost(postContent);
  res.status(200);
  res.send();
});

module.exports = router;
