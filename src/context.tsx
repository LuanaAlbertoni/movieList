import React from "react";
import { useImmer } from "use-immer";

export type Movie = {
  id: number;
  name: string;
  rate: number;
};

type AddMovie = {
  name: string;
  rate: number;
};

interface MovieContextState {
  movies: Movie[];
  addMovie: (movie: AddMovie) => void;
  removeMovie: (id: number) => void;
  updateMovie: (movie: Movie) => void;
}

const MovieContext = React.createContext<MovieContextState>(
  {} as MovieContextState
);

const MovieContextProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useImmer<Movie[]>([]);

  const addMovie = (movie: AddMovie) => {
    setMovies((draft) => {
      draft.push({
        ...movie,
        id: draft.length + 1,
      });
    });
  };

  const removeMovie = (id: number) => {
    setMovies((draft) => {
      const idx = draft.findIndex((item) => item.id === id);
      if (idx > -1) {
        draft.splice(idx, 1);
      }
    });
  };

  const updateMovie = (movie: Movie) => {
    setMovies((draft) => {
      const idx = draft.findIndex((item) => item.id === movie.id);
      if (idx > -1) {
        draft[idx] = movie;
      }
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie,
        removeMovie,
        updateMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

export const useMovieContext = () => {
  return React.useContext(MovieContext);
};
