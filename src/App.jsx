import React from 'react';
import axios from 'axios';
import ReactRouterPropTypes from 'react-router-prop-types';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';
import Home from './screens/home';
import Login from './screens/login';
import PostForm from './screens/forum/postForm';
import ForumContainer from './screens/forum/forumContainer';

const history = createBrowserHistory();

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100vw',
    height: '100vh ',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
});

function App() {
  const { loginWithPopup, isAuthenticated, logout, user } = useAuth0();

  const styles = useStyles();

  const handleLogin = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else if (!isAuthenticated) {
      loginWithPopup();
    }
  };

  function submitNewPost(title, summary, body, sub, cb) {
    axios
      .post('http://localhost:8000/forum/createPost', {
        title,
        summary,
        body,
        authorId: sub,
      })
      .then(() => {
        cb();
        history.back();
      });
  }

  function updateFormPost(title, summary, body, sub) {
    console.log(title, summary, body, sub);
    // todo
  }

  return (
    <>
      <CssBaseline />
      <div className={styles.root}>
        <Login
          login={handleLogin}
          buttonText={isAuthenticated ? 'Logout' : 'Login'}
          user={user}
          picture={user?.picture}
          name={user?.name}
        />
        <Router>
          <Switch>
            <Route path="/forum/createPost">
              <PostForm
                submitForm={submitNewPost}
                history={history}
                user={user}
                isAuthenticated={isAuthenticated}
                screenTitle="Create"
              />
            </Route>
            <Route
              path="/forum/updatePost/:postId"
              render={(props) => (
                <PostForm
                  submitForm={updateFormPost}
                  history={history}
                  user={user}
                  isAuthenticated={isAuthenticated}
                  screenTitle="Update"
                  match={props.match}
                />
              )}
            />
            <Route path="/forum">
              <ForumContainer isAuthenticated={isAuthenticated} picture={user?.picture} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

App.defaultProps = {
  match: undefined,
};

App.propTypes = {
  match: ReactRouterPropTypes.match,
};

export default App;
