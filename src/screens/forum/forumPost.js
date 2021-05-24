import { useState } from "react";
import clsx from "clsx";
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "75%",
    maxWidth: "75%",
    minHeight: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transfor", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ForumPost(props) {
  const style = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function deletePost() {
    axios.delete('http://localhost:8000/forum/deletePost/', 
      {postId: props.postId})
    .then(v => console.log(v));
  }

  return (
    <Card className={style.root}>
      <CardHeader
        avatar={props.user?.image}
        action={
          <IconButton>
            <MoreVertIcon onClick={deletePost}/>
          </IconButton>
        }
        title={props.title}
        subheader={props.formattedDate}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(style.expand, {
            [style.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.body}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
