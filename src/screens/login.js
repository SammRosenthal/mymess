import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: { position: "absolute", top: "30px", right: "30px" },
});

export default function Login(props) {
  const styles = useStyles();

  return (
    <Button
      onClick={props.toggleLoggedIn}
      className={styles.root}
      variant="contained"
      color="primary"
    >
      {props.buttonText}
    </Button>
  );
}
