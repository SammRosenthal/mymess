import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: { position: 'absolute', top: '0', width: '100vw' },
  container: { marginBottom: '50px' },
  spacing: { display: 'flex', justifyContent: 'space-between' },
  userInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '200px',
  },
});

export default function Login(props) {
  const { login, buttonText, name, picture } = props;
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AppBar position="sticky" className={styles.root}>
        <Toolbar className={styles.spacing}>
          <Button
            onClick={() => {
              login();
            }}
            color="inherit"
          >
            {buttonText}
          </Button>
          {name && (
            <div className={styles.userInfo}>
              <Avatar alt={name} src={picture} />
              <Typography>{name}</Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Login.defaultProps = {
  login: () => {},
  buttonText: '',
  name: '',
  picture: '',
};

Login.propTypes = {
  login: PropTypes.func,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
};
