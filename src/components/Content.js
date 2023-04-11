import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = ({ movies, moviesSort }) => {
  const [moviesView, setMoviesView] = useState([]);

  useEffect(() => {
    if (moviesSort.length > 1) {
      console.log("je suis trié");
      console.log(moviesSort);
      setMoviesView(moviesSort);
    } else {
      console.log("je ne suis pas trié");
      console.log(movies);
      setMoviesView(movies);
    }
  }, [movies, moviesSort]);
  return (
    <div className='home-content'>
      {moviesView.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Content;
