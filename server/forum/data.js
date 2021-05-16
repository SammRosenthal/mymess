import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = {
  getAllPosts: getAllPosts()
    .catch((e) => console.error("Error gathering all Forum posts", e.message))
    .finally(async () => await prisma.$disconnect()),
};

async function getAllPosts() {
  const allPosts = await prisma.forumPosts.findMany();
  console.log(allPosts);
}
