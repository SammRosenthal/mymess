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
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AppBar position="sticky" className={styles.root}>
        <Toolbar className={styles.spacing}>
          <Button
            onClick={() => {
              props.login();
            }}
            color="inherit"
          >
            {props.buttonText}
          </Button>
          {props.user && props.user.name && (
            <div className={styles.userInfo}>
              <Avatar alt={props.user?.name} src={props.user?.picture}></Avatar>
              <Typography>{props.user?.name}</Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
