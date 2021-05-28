import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const RESPONSE_CODE_200 = 200;
const RESPONSE_CODE_500 = 500;

async function addNewPost(postContent) {
  return prisma.forumPosts.create({ data: postContent });
}

async function deletePost(postId) {
  return prisma.forumPosts.delete({ where: { id: postId } });
}

function sortByCreatedDate(posts) {
  posts.sort((a, b) => b.createdAt - a.createdAt);
}

function formatDates(posts) {
  // adding new value and placing a formated version of the
  // createdAt date value
  posts.forEach((v) => {
    v.formattedDate = v.createdAt.toDateString();
  });
}

function defaultPostFormatting(posts) {
  // this copy is mutated in place
  let postsCopy = [...posts];
  postsCopy = sortByCreatedDate(postsCopy);
  postsCopy = formatDates(postsCopy);
  return postsCopy;
}

async function getAllPosts() {
  const allPosts = await prisma.forumPosts.findMany();
  const formattedPosts = defaultPostFormatting(allPosts);
  return formattedPosts;
}

module.exports = {
  getAllPosts: async () =>
    getAllPosts()
      .catch((e) => console.error('Error gathering all Forum posts', e.message))
      .finally(async () => prisma.$disconnect()),
  addPost: async (postContent) => {
    await addNewPost(postContent)
      .catch((e) => {
        console.error('Error adding new post to Forum DB', e.message);
        return RESPONSE_CODE_500;
      })
      .finally(async () => {
        /* eslint-disable */
        prisma.$disconnect;
        return RESPONSE_CODE_200;
      });
  },
  deletePost: async (postId) => deletePost(postId),
};
