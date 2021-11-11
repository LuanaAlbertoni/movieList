import { Grid, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Movie, useMovieContext } from "../../context";
import styles from "./styles";

const useStyles = makeStyles(styles);

interface OwnProps {
  movie: Movie;
}

const MovieListItem: React.FC<OwnProps> = ({ movie }) => {
  const classes = useStyles();

  const { removeMovie, updateMovie } = useMovieContext();
  const [hoverRate, setHoverRate] = React.useState(movie.rate);

  const handleRemove = () => {
    removeMovie(movie.id);
  };

  const handleUpdate = () => {
    updateMovie({ ...movie, rate: hoverRate });
    setHoverRate(0);
  };

  return (
    <Grid
      // className={classes.root}
      container
      item
      xs={8}
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Typography variant="h5">{movie.name}</Typography>
      </Grid>
      <Grid container item xs={2} onMouseOut={() => setHoverRate(movie.rate)}>
        {[...Array(5)].map((item, idx) => (
          <Grid
            item
            key={idx}
            // className={classes.rateStar}
            onMouseOver={() => setHoverRate(idx + 1)}
            onClick={handleUpdate}
          >
            {idx < hoverRate ? <StarIcon /> : <StarOutlineIcon />}
          </Grid>
        ))}
      </Grid>
      <Grid item>
        <IconButton onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <CreateIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default MovieListItem;
