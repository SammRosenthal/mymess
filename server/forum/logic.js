const { ContactSupportOutlined } = require("@material-ui/icons");
const forumData = require("./data.js");

module.exports = {
  getAllPosts: async (res) => {
    const allPosts = await forumData.getAllPosts();
    console.log(allPosts);
    res.json(allPosts);
  },
};
