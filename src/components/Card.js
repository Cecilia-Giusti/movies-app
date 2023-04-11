import React from "react";

const Card = ({ movie }) => {
  const newDate = new Date(movie.release_date);
  console.log(newDate);
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h5>
        Sorti le : {newDate.getDate()}/
        {newDate.getMonth() >= 10
          ? newDate.getMonth()
          : "0" + newDate.getMonth()}
        /{newDate.getFullYear()}
      </h5>
      <h4>
        {movie.vote_average}/10
        <span></span>
      </h4>
      <ul>
        <li>Aventure</li>
        <li>Action</li>
        <li>SF</li>
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="btn">Ajouter aux coups de coeurs</div>
    </div>
  );
};

export default Card;
