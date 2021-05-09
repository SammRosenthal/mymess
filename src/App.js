import { useState } from "react";
import Home from "./screens/home";
import Login from "./screens/login";
import ForumContainer from "./screens/forum/forumContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh ",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
  },
});

function App() {
  const { loginWithPopup, isAuthenticated, logout, user } = useAuth0();
  const [validatedUser, setValidatedUser] = useState({});
  const styles = useStyles();

  const handleLogin = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else if (!isAuthenticated) {
      loginWithPopup().then((_) => setValidatedUser(user));
    }
  };

  return (
    <div className={styles.root}>
      <Login
        login={handleLogin}
        buttonText={isAuthenticated ? "Logout" : "Login"}
        user={user}
      />
      <Router>
        <Switch>
          <Route path="/forum">
            <ForumContainer />
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
