import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useMovieContext } from "../../context";
import styles from "./styles";

const useStyles = makeStyles(styles);

const AddField: React.FC = () => {
  const classes = useStyles();

  const [movieName, setMovieName] = React.useState("");
  const { addMovie } = useMovieContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMovieName(e.target.value);
  };

  const handleAdd = () => {
    if (movieName) {
      addMovie({ name: movieName, rate: 0 });
      setMovieName("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        // className={classes.root}
      >
        <Grid item xs={8}>
          <TextField
            value={movieName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            placeholder="Nome do Filme"
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleAdd}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddField;
