import React from "react";
import Card from "./Card";

const Content = ({ movies }) => {
  return (
    <div className="home-content">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Content;
