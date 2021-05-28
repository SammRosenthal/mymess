const express = require('express');
const forumLogic = require('./logic');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('Request to gather all forum post.');
  const allPosts = await forumLogic.getAllPosts(res);
  res.json(allPosts);
});

router.post('/createPost', async (req, res) => {
  console.log('Request to add a forum post to db.');

  const postContent = req.body;
  await forumLogic.addPost(postContent);
  res.status(200);
  res.send();
});

router.delete('/deletePost/:postId', async (req, res) => {
  const postId = Number(req.params.postId);
  console.log('Request to delete a forum post to the db.', postId);

  if (postId) {
    console.log('received postid:', postId);
    await forumLogic.deletePost(postId);
  }

  res.status(200);
  res.send();
});

module.exports = router;
