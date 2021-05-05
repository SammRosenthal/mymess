import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "25%",
    height: "570px",
    width: "400px",
  },
  fill: {
    width: "100%",
    height: "100%",
  },
  centerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Home() {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardContent className={styles.centerText}></CardContent>
    </Card>
  );
}

export default Home;
