import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import MyContext from "../MyContext";

const Content = () => {
  const { movies, moviesSort, setMoviesLike, moviesLike } =
    useContext(MyContext);
  const [moviesView, setMoviesView] = useState([]);

  useEffect(() => {
    if (moviesSort.length > 1) {
      setMoviesView(moviesSort);
    } else {
      setMoviesView(movies);
    }
  }, [movies, moviesSort]);
  return (
    <div className='home-content'>
      {moviesView.map((movie) => (
        <Card
          key={movie.id}
          movie={movie}
          moviesLike={moviesLike}
          setMoviesLike={setMoviesLike}
        />
      ))}
    </div>
  );
};

export default Content;
