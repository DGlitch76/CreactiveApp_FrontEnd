import '../index.css'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Link } from 'react-router-dom';

import default_project_image from '../assets/default_project_image.jpeg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/projects/${project._id}`}>
        <CardMedia
          component="img"
          height="194"
          image={project.images[0] ? project.images[0] : default_project_image}
          alt="Image Alt Text"
        />
      </Link>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={project.name}
        subheader="toBe ${CATEGORY.INDUSTRY}"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="button" sx={{ fontWeight: 700 }}>Project Scope</Typography>
          <Typography paragraph sx={{ fontWeight: 300 }}>
            Ipsum Lorem About the project
          </Typography>
          <Typography paragraph sx={{ fontWeight: 200 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vitae urna ante. Phasellus nec dui posuere, semper lectus vitae,
          pretium arcu. Vestibulum vestibulum quis nisl eu eleifend. Cras quis diam sit amet
          quam luctus convallis. Aliquam in turpis eu erat eleifend fringilla. 
          </Typography>
          <Typography variant="button" sx={{ fontWeight: 700 }}>Project Gallery</Typography>
          <Typography sx={{ fontWeight: 200 }}>
            IF POSSIBLE: Image Gallery?!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard;