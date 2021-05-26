const express = require('express');
const router = express.Router();
const forumLogic = require('./logic.js');

router.get('/', async (req, res) => {
  console.log('Request to gather all forum post.');
  const allPosts = await forumLogic.getAllPosts(res);
  res.json(allPosts);
});

router.post('/createPost', async (req, res) => {
  console.log('Request to add a forum post to db.');

  const postContent = req.body;
  const responseCode = await forumLogic.addPost(postContent);
  res.status(200);
  res.send();
});

router.delete('/deletePost', async (req, res) => {
  console.log('Request to delete a forum post to the db.');
  // validation to require query param
  const postId = req.body.postId;

  if (postId && postId.trim().length === 0) {
    await forumLogic.deletePost(postId);
  }

  res.status(200);
  res.send();
});

module.exports = router;
