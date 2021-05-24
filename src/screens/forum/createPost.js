import { useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
  const [validation, setValidation] = useState({
    title: false,
    summary: false,
    body: false,
  });

  function resetFormFields() {
    setTitle("");
    setSummary("");
    setBody("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      submitNewPost();
    }
  }

  function validateForm() {
    const newValidation = { ...validation };
    validateTitle(newValidation);
    validateSummary(newValidation);
    validateBody(newValidation);

    setValidation(newValidation);
    return !Object.values(newValidation).some((v) => v === true);
  }

  function validateTitle(validationObj) {
    if (title.trim().length === 0) {
      validationObj.title = true;
      return false;
    }
    validationObj.title = false;
    return true;
  }

  function validateSummary(validationObj) {
    if (summary.trim().length === 0) {
      validationObj.summary = true;
      return false;
    }
    validationObj.summary = false;
    return true;
  }

  function validateBody(validationObj) {
    if (body.trim().length === 0) {
      validationObj.body = true;
      return false;
    }
    validationObj.body = false;
    return true;
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

  function cancelPostSubmisison() {
    resetFormFields();
    props.history.goBack();
  }

  return (
    <Container className={styles.root}>
      <form onSubmit={handleSubmit} noValidate>
        <Paper className={styles.paper}>
          <Grid container spacing={3} className={styles.centerGrid}>
            <Grid item xs={12}>
              <Paper className={styles.title} elevation={0}>
                Create Your Post
              </Paper>
            </Grid>
            <Grid item xs={12} className={styles.singleLineInput}>
              <TextField
                required={true}
                fullWidth
                label="Post Title"
                variant="outlined"
                error={validation.title}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Grid>
            <Grid item xs={12} className={styles.singleLineInput}>
              <TextField
                required={true}
                fullWidth
                label="Post Summary (Text Preview)"
                multiline
                variant="outlined"
                rows={6}
                error={validation.summary}
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
              />
            </Grid>
            <Grid item xs={12} className={styles.singleLineInput}>
              <TextField
                required={true}
                fullWidth
                label="Post Body"
                variant="outlined"
                multiline
                rows={6}
                error={validation.body}
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
            </Grid>
            <Grid item xs={6} className={styles.buttonContainer}>
              {props.isAuthenticated ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.addButton}
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
      </form>
    </Container>
  );
}
