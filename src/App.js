import { useState } from "react";
import Home from "./screens/home";
import Login from "./screens/login";
import Forum from "./screens/forum/forum.js";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const styles = useStyles();

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className={styles.root}>
      <Login
        buttonText={loggedIn ? "Logout" : "Login"}
        toggleLoggedIn={toggleLoggedIn}
      />
      <Router>
        <Switch>
          <Route path="/forum">
            <Forum />
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
