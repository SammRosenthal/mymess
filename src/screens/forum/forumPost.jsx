import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '75%',
    maxWidth: '75%',
    minHeight: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transfor', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  postButtons: {
    marginTop: 8,
    marginRight: 3,
  },
  postButton: {
    marginLeft: 5,
    marginRight: 5,
    cursor: 'pointer',
  },
}));

export default function ForumPost(props) {
  const style = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { picture, title, formattedDate, summary, body, postId, getAllPosts } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function deletePost() {
    axios.delete(`http://localhost:8000/forum/deletePost/${postId}`).then(() => getAllPosts());
  }

  function updatePost() {}

  return (
    <Card className={style.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={picture} />}
        action={
          <div className={style.postButtons}>
            <Icon className={style.postButton}>
              <DeleteOutlineIcon onClick={deletePost} />
            </Icon>
            <Icon className={style.postButton}>
              <Link to={`/forum/updatePost/${postId}`}>
                <EditIcon onClick={updatePost} />
              </Link>
            </Icon>
          </div>
        }
        title={title}
        subheader={formattedDate}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
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
          <Typography paragraph>{body}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// const {picture, title, formattedDate, summary, body, postId} = props;
ForumPost.defaultProps = {
  picture: '',
  title: '',
  formattedDate: '',
  summary: '',
  body: '',
  postId: '',
  getAllPosts: () => {},
};

ForumPost.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  formattedDate: PropTypes.string,
  summary: PropTypes.string,
  body: PropTypes.string,
  postId: PropTypes.number,
  getAllPosts: PropTypes.func,
};
