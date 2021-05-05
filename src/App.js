import Home from "./screens/home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Home />
    </div>
  );
}

export default App;
