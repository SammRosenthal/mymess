DROP TABLE "public"."ForumPosts";

CREATE TABLE "public"."ForumPosts" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
  summary TEXT,
  body TEXT,
  "authorId" TEXT NOT NULL
);


INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('What is Lorem Ipsum?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Why do we use it?', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Where does it come from?', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.', 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 1111111111);

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Where can I get some?', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable.', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Nullam euismod sollicitudin euismod', 'Curabitur semper est quis nunc tristique varius. Maecenas aliquet sit amet dui vel ullamcorper. Aliquam elementum erat libero.', 'Etiam sapien urna, mollis vitae purus at, pharetra egestas tellus. Praesent aliquet neque sed dui aliquam finibus. Sed molestie turpis sed scelerisque dictum. Nullam vel ante massa. In quis sollicitudin massa, ullamcorper pharetra felis. Etiam dui sapien, dictum quis ex id, tristique accumsan tellus. Nulla non augue vulputate, pulvinar lorem ac, vehicula diam. Donec mauris leo, maximus vitae maximus vitae, mollis et arcu. Nullam vulputate in elit in mattis.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Nam varius tincidunt sagittis', 'Nunc ut tortor eget lacus egestas tincidunt eget ac massa. In lobortis, lacus at egestas euismod, ipsum turpis scelerisque dui, faucibus mollis metus dolor at augue. In hac habitasse platea dictumst. Donec eget convallis sem, et venenatis ipsum.', 'Sed sagittis turpis ut augue tempus ultrices. In sit amet suscipit eros. Nunc congue nunc volutpat lacus bibendum cursus. In faucibus ut nunc et ultricies. Pellentesque vel urna sit amet est eleifend scelerisque. Nam interdum velit sit amet mi condimentum sagittis. Pellentesque dictum sollicitudin egestas. Nam a lorem urna. Proin lorem libero, euismod sed mauris non, venenatis aliquam leo. Duis fermentum varius metus, in mollis nisl eleifend eu.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('In in dignissim mi', 'Sed ut aliquet enim. Suspendisse lacinia velit a semper ullamcorper. Fusce pellentesque quam ut ligula efficitur bibendum. Sed tortor purus, lacinia nec nulla sed, ullamcorper porttitor augue.', 'Sed sed risus a velit finibus commodo. In id eros mollis justo tincidunt scelerisque. Integer nibh nulla, sodales quis nunc et, bibendum posuere ex. Nunc erat felis, ornare eget nunc tincidunt, aliquet cursus nisl. Nullam tempus porta orci quis euismod. Donec eget finibus mi. Suspendisse sed vulputate lorem. Aliquam sed eleifend lorem, eget varius felis.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Etiam sit amet lectus nibh', 'Donec ut interdum lacus, id lobortis elit. Praesent et sodales elit, ut auctor quam. Cras porttitor aliquet dolor. Aenean in magna ut lacus tincidunt sagittis.', 'Aenean tempus suscipit libero a rutrum. Suspendisse eget semper sapien. Suspendisse id neque vel augue efficitur consectetur. Proin fermentum ligula ut ligula lacinia, feugiat tristique odio bibendum. Aenean lacinia, mauris eget luctus bibendum, nisi ligula condimentum enim, vitae rhoncus erat odio a mauris. Cras gravida ex quis nunc gravida ultrices. Fusce interdum mi magna, non eleifend metus tincidunt at. Quisque nec convallis ligula. Cras commodo feugiat feugiat. Praesent tristique, ipsum non dictum tristique, nulla turpis lobortis leo, sit amet efficitur tellus magna eget urna. Morbi sit amet diam quis dui laoreet sodales quis nec lacus.', 1111111111);

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Maecenas nec risus mi', 'Donec consequat dapibus neque non placerat. Duis semper sem quis massa ullamcorper, sit amet vestibulum neque tempus.', 'Suspendisse in augue ac purus aliquet cursus. In in dignissim mi. Sed ut aliquet enim. Suspendisse lacinia velit a semper ullamcorper. Fusce pellentesque quam ut ligula efficitur bibendum. Sed tortor purus, lacinia nec nulla sed, ullamcorper porttitor augue. Aliquam erat volutpat. Fusce ut nibh in nunc efficitur bibendum eget non est. Nam eget iaculis libero, nec sodales lorem.', '1111111111');

INSERT INTO "public"."ForumPosts" ( title, summary, body, "authorId")
VALUES ('Pellentesque id massa risus', 'Vivamus non finibus purus, at efficitur tellus. Sed varius interdum lorem vel imperdiet. Etiam commodo, arcu vitae iaculis mattis, augue quam porta felis, vitae condimentum ante ligula eu purus.', 'Vivamus leo lectus, suscipit sit amet posuere id, elementum vel dolor. Donec aliquet ultricies dolor, malesuada rhoncus libero imperdiet sit amet. Nullam non viverra ante, ac ultricies turpis. Nulla id posuere elit. Quisque gravida hendrerit orci in congue. In eget auctor felis, eu pellentesque risus. Pellentesque ultricies finibus dolor vel faucibus. Suspendisse mollis risus diam, vitae consequat nunc dictum et. Phasellus porttitor sem sit amet risus lobortis, eu lobortis quam auctor. Aenean a mauris semper, sollicitudin lectus ac, elementum nisl.', '1111111111');


select * from "public"."ForumPosts";