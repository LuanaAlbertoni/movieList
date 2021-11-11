import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import AddField from "./components/AddField";
import MovieList from "./components/MovieList";
import styles from "./styles";

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" 
    // className={classes.root}
    >
      <Grid container justifyContent="center" item xs={12}>
        <Typography variant="h3">Meus Filmes</Typography>
      </Grid>
      <Grid item xs={4}>
        <AddField />
      </Grid>
      <Grid item xs={12} 
      // className={classes.moviesList}
      >
        <MovieList />
      </Grid>
    </Grid>
  );
}

export default App;
