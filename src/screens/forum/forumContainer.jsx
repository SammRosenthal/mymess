import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import ForumPost from './forumPost';

// eslint-disable-next-line
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
    width: '100%',
  },
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: 75,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '86.6%',
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: 'white',
  },
});

export default function ForumContainer(props) {
  const { isAuthenticated } = props;
  const { button, root } = useStyles();
  const [allPosts, setAllPosts] = useState([]);
  const { picture } = props;

  useEffect(() => {
    axios.get('http://localhost:8000/forum').then((v) => {
      setAllPosts(v.data);
    });
  }, []);

  return (
    <>
      <Container variant="contained" className={root}>
        <ThemeProvider theme={theme}>
          <Link className={button} to={isAuthenticated ? '/forum/createPost' : '/forum/'}>
            <Button
              variant="contained"
              color="primary"
              className={button}
              disabled={!isAuthenticated}
            >
              Add Post
            </Button>
          </Link>
        </ThemeProvider>
        {allPosts ? (
          allPosts.map((post) => (
            <ForumPost
              key={post.id}
              postId={post.id}
              body={post.body}
              summary={post.summary}
              title={post.title}
              formattedDate={post.formattedDate}
              picture={picture}
            />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </Container>
    </>
  );
}

ForumContainer.defaultProps = {
  isAuthenticated: false,
  picture: '',
};

ForumContainer.propTypes = {
  isAuthenticated: PropTypes.bool,
  picture: PropTypes.string,
};
