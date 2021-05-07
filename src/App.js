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
  const { loginWithPopup, isAuthenticated, logout } = useAuth0();
  const styles = useStyles();

  const handleLogin = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else if (!isAuthenticated) {
      loginWithPopup();
    }
  };

  return (
    <div className={styles.root}>
      <Login
        login={handleLogin}
        buttonText={isAuthenticated ? "Logout" : "Login"}
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
