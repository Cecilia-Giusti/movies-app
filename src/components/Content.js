import React, { useEffect, useState } from "react";
import Card from "./Card";

const Content = ({ movies, moviesSort, setMoviesLike, moviesLike }) => {
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
          setMoviesLike={setMoviesLike}
          moviesLike={moviesLike}
        />
      ))}
    </div>
  );
};

export default Content;
