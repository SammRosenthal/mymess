import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RESPONSE_CODE_200 = 200;
const RESPONSE_CODE_500 = 500;

module.exports = {
  getAllPosts: async () => {
    return getAllPosts()
      .catch((e) => console.error("Error gathering all Forum posts", e.message))
      .finally(async () => await prisma.$disconnect());
  },
  addPost: async (postContent) => {
    await addNewPost(postContent)
      .catch((e) => {
        console.error("Error adding new post to Forum DB", e.message);
        return RESPONSE_CODE_500;
      })
      .finally(async () => {
        await prisma.$disconnect;
        return RESPONSE_CODE_200;
      });
  },
};

async function getAllPosts() {
  const allPosts = await prisma.forumPosts.findMany();
  return allPosts;
}

async function addNewPost(postContent) {
  return await prisma.forumPosts.create({ data: postContent });
}
