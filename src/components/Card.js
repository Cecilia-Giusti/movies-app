import React, { useState } from "react";

const Card = ({ movie, setMoviesLike, moviesLike }) => {
  const newDate = new Date(movie.release_date);
  const [addMovie, setAddMovie] = useState(false);

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const AddMoviesLike = () => {
    setAddMovie(!addMovie);
    if (!addMovie) {
      const moviesList = [movie, ...moviesLike];
      setMoviesLike(moviesList);
    } else {
    }
  };
  return (
    <div className='card'>
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
      <ul>{movie.genre_ids ? genreFinder() : null}</ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div
        className={addMovie ? "btn btn-active" : "btn"}
        onClick={AddMoviesLike}>
        {addMovie
          ? "Enlever des coups de coeurs"
          : "Ajouter aux coups de coeurs"}
      </div>
    </div>
  );
};

export default Card;
