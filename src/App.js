import Home from "./screens/home";
import Test from "./screens/test/test.js";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
