const forumData = require('./data');

module.exports = {
  getAllPosts: async () => {
    const allPosts = await forumData.getAllPosts();
    return allPosts;
  },
  addPost: async (postContent) => {
    validatePostInput(postContent);
    return forumData.addPost(postContent);
  },
};

function validatePostInput() {

}
