import { useEffect, useState } from "react";
import ForumPost from "./forumPost";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: 75,
  },
});

export default function ForumContainer(props) {
  const styles = useStyles();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/forum").then((v) => {
      setAllPosts(v.data);
    });
  }, []);

  return (
    <>
      <Container className={styles.root}>
        {allPosts ? (
          allPosts.map((post) => (
            <ForumPost
              key={post.id}
              authorId={post.authorId}
              body={post.body}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              summary={post.summary}
              title={post.title}
            />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </Container>
    </>
  );
}
