import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Form from "../components/Form";
import getMovies from "../service/getMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("code");

  useEffect(() => {
    getMovies(setMovies, search);
  }, [search]);

  return (
    <div className="home-page">
      {movies && <Form setSearch={setSearch} />}
      {movies && <Content movies={movies} />}
    </div>
  );
};

export default Home;
