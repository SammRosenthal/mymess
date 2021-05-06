import { useState } from "react";
import Home from "./screens/home";
import Login from "./screens/login";
import Forum from "./screens/forum/forum.js";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    toggleLoggedIn();
  };

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className={styles.root}>
      <Login
        login={loginWithRedirect}
        buttonText={loggedIn ? "Logout" : "Login"}
        toggleLoggedIn={handleLogin}
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
