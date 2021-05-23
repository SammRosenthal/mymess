import { useEffect, useState } from "react";
import ForumPost from "./forumPost";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

// eslint-disable-next-line
const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
    width: "100%",
  },
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: 75,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    minWidth: "86.6%",
    margin: theme.spacing(1),
    textDecoration: "none",
    color: "white",
  },
});

export default function ForumContainer(props) {
  const styles = useStyles();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/forum").then((v) => {
      setAllPosts(v.data);
    });
  }, []);

  return (
    <>
      <Container variant="contained" className={styles.root}>
        <ThemeProvider theme={theme}>
          {props.isAuthenticated ? (
            <Link
              className={styles.button}
              to={props.isAuthenticated ? "/forum/createPost" : ""}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Add Post
              </Button>
            </Link>
          ) : (
            <Link className={styles.button}>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
                disabled
              >
                Add Post
              </Button>
            </Link>
          )}
        </ThemeProvider>
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
              formattedDate={post.formattedDate}
            />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </Container>
    </>
  );
}
