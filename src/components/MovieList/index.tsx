import { Grid } from "@material-ui/core";
import React from "react";
import { useMovieContext } from "../../context";
import MovieListItem from "../MovieListItem";

const MovieList: React.FC = () => {
  const { movies } = useMovieContext();

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid container justifyContent="center" item xs={12}>
          <MovieListItem movie={movie} key={movie.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
