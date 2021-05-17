import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 85,
    maxWidth: "75%",
    justifyContent: "center",
    height: "80%",
  },
  paper: {
    height: "100%",
  },
  title: {
    padding: theme.spacing(1),
    textAlign: "center",
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
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
