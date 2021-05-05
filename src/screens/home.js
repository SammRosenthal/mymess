import { CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "25%",
    height: "570px",
    width: "400px",
  },
  fill: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
  },
  centerText: {
    alignSelf: "center",
  },
});

function Home() {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardContent className={styles.fill}>
        <Typography component="h2" className={styles.centerText}>
          Test Content
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
