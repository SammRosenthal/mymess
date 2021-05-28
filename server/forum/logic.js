const forumData = require('./data');

module.exports = {
  getAllPosts: async () => {
    const allPosts = await forumData.getAllPosts();
    return allPosts;
  },
  addPost: async (postContent) => forumData.addPost(postContent),
  deletePost: async (postId) => forumData.deletePost(postId),
};
