import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import UserListPage from "./pages/UserListPage";
import MyContext from "./MyContext";

import "./styles/index.scss";
import { useState } from "react";

const App = () => {
  const [moviesLike, setMoviesLike] = useState(
    window.localStorage.movies ? window.localStorage.movies.split(",") : []
  );
  const [movies, setMovies] = useState([]);
  const [moviesSort, setMoviesSort] = useState([]);

  const contextValue = {
    moviesLike,
    setMoviesLike,
    movies,
    setMovies,
    moviesSort,
    setMoviesSort,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/favoris' element={<UserListPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
