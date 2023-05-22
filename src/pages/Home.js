import React, { useContext, useEffect, useState } from "react";
import Content from "../components/Content";
import Form from "../components/Form";
import getMovies from "../service/getMovies";
import MyContext from "../MyContext";

const Home = () => {
  const { movies, setMovies } = useContext(MyContext);

  const [search, setSearch] = useState("a");
  const [top, setTop] = useState(false);
  const [flop, setFlop] = useState(false);

  useEffect(() => {
    getMovies(setMovies, search);
  }, [search, setMovies]);

  return (
    <div className='home-page'>
      {movies && (
        <Form
          setSearch={setSearch}
          top={top}
          setTop={setTop}
          flop={flop}
          setFlop={setFlop}
        />
      )}
      {movies && <Content />}
    </div>
  );
};

export default Home;
