import React, { useContext, useEffect, useState } from "react";
import CardLike from "../components/CardLike";
import MyContext from "../MyContext";
import getMovieId from "../service/getMovieId";

const UserListPage = () => {
  const { moviesLike } = useContext(MyContext);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (moviesLike.length > 0) {
        const moviesData = [];
        for (let i = 0; i < moviesLike.length; i++) {
          const movie = await getMovieId(moviesLike[i]);
          moviesData.push(movie);
        }
        setMoviesList(moviesData);
      }
    };

    fetchMovies();
  }, [moviesLike]);

  return (
    <div className='user-list-page'>
      <h2>Coups de coeur</h2>
      <div className='result'>
        {moviesList && moviesList.length > 0 ? (
          moviesList.map((movie, id) => <CardLike key={id} movie={movie} />)
        ) : (
          <h2>Aucun coup de coeur pour l'instant</h2>
        )}
      </div>
    </div>
  );
};

export default UserListPage;
