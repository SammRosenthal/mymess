import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = {
  getAllPosts: async () => {
    return getAllPosts()
      .catch((e) => console.error("Error gathering all Forum posts", e.message))
      .finally(async () => await prisma.$disconnect());
  },
};

async function getAllPosts() {
  const allPosts = await prisma.forumPosts.findMany();
  return allPosts;
}
