const { ContactSupportOutlined } = require("@material-ui/icons");
const forumData = require("./data.js");

module.exports = {
  getAllPosts: async (res) => {
    const allPosts = await forumData.getAllPosts();
    return allPosts;
  },
  addPost: async (postContent) => {
    // TODO: validate post content here
    return await forumData.addPost(postContent);
  },
};
