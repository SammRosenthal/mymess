import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: '35%',
    height: '45%',
  },
  fill: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
  },
  text: {
    alignSelf: 'center',
    fontSize: '30px',
  },
  hideStyle: {
    textDecoration: 'none',
    color: 'black',
  },
});

function Home() {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardContent className={styles.fill}>
        <Typography component="h2" className={styles.text}>
          <Link className={styles.hideStyle} to="/forum">
            Forum
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Home;
