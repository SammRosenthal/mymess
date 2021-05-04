import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "25%",
    minHeight: "400",
    height: "40%",
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
    <div className={styles.fill}>
      <Card className={styles.root}>
        <CardContent className={styles.centerText}></CardContent>
      </Card>
    </div>
  );
}

export default Home;
