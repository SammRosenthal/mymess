import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "25%",
    minHeight: "400",
    height: "40%",
  },
});

function Home() {
  const styles = useStyles();

  return <Card className={styles.root}>Test</Card>;
}

export default Home;
