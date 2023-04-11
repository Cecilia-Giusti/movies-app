import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Form from "../components/Form";
import getMovies from "../service/getMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [moviesSort, setMoviesSort] = useState([]);
  const [search, setSearch] = useState("a");
  const [top, setTop] = useState(false);
  const [flop, setFlop] = useState(false);

  useEffect(() => {
    getMovies(setMovies, search);
  }, [search]);

  return (
    <div className='home-page'>
      {movies && (
        <Form
          setSearch={setSearch}
          movies={movies}
          top={top}
          setTop={setTop}
          setMoviesSort={setMoviesSort}
          flop={flop}
          setFlop={setFlop}
        />
      )}
      {movies && <Content movies={movies} moviesSort={moviesSort} />}
    </div>
  );
};

export default Home;
