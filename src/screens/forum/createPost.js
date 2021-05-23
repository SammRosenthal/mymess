import { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { SettingsInputSvideoRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 125,
    maxWidth: "75%",
    justifyContent: "center",
    height: "70%",
  },
  paper: {
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  addButton: {
    width: "100px",
  },
  cancelButton: {
    width: "100px",
  },
  title: {
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "20px",
  },
  singleLineInput: {
    maxWidth: "75%",
    alignSelf: "center",
  },
  centerGrid: {
    justifyContent: "center",
  },
}));

export default function CreatePost(props) {
  const styles = useStyles();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  function resetFormFields() {
    setTitle("");
    setSummary("");
    setBody("");
  }

  function submitNewPost() {
    axios
      .post("http://localhost:8000/forum/createPost", {
        title,
        summary,
        body,
        authorId: props?.user.sub,
      })
      .then((_) => {
        resetFormFields();
        props.history.goBack();
      });
  }

  useEffect(() => {
    setCurrentUser(props.user);
  }, [props.user]);

  function cancelPostSubmisison() {
    resetFormFields();
    props.history.goBack();
  }

  return (
    <Container className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container spacing={3} className={styles.centerGrid}>
          <Grid item xs={12}>
            <Paper className={styles.title} elevation={0}>
              Create Your Post
            </Paper>
          </Grid>
          <Grid item xs={12} className={styles.singleLineInput}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Post Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Grid>
          <Grid item xs={12} className={styles.singleLineInput}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Post Summary (Text Preview)"
              multiline
              variant="outlined"
              rows={6}
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
            />
          </Grid>
          <Grid item xs={12} className={styles.singleLineInput}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Post Body"
              variant="outlined"
              multiline
              rows={6}
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </Grid>
          <Grid item xs={6} className={styles.buttonContainer}>
            {props.isAuthenticated ? (
              <Button
                variant="contained"
                color="primary"
                className={styles.addButton}
                onClick={submitNewPost}
              >
                Add
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={styles.addButton}
                disabled
              >
                Add
              </Button>
            )}
            <Button
              variant="contained"
              color="secondary"
              className={styles.cancelButton}
              onClick={cancelPostSubmisison}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
