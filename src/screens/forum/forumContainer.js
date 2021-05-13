import ForumPost from "./forumPost";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 100,
  },
});

export default function ForumContainer() {
  const styles = useStyles();

  return (
    <>
      <Container className={styles.root}>
        <ForumPost />
        <ForumPost />
        <ForumPost />
      </Container>
    </>
  );
}
