import { useContext, useEffect } from "react";
import MyContext from "../MyContext";

const Form = ({ setSearch, top, setTop, flop, setFlop }) => {
  const { movies, setMoviesSort } = useContext(MyContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value;

    if (search !== "") {
      setSearch(search);
    } else {
      setSearch("a");
    }
  };

  const handleChange = (e) => {
    const search = e.target.value;
    if (search === "") {
      setSearch("code");
    }
  };

  const handleClickTop = () => {
    setFlop(false);
    setTop(!top);
  };

  const handleClickFlop = () => {
    setTop(false);
    setFlop(!flop);
  };

  useEffect(() => {
    if (top) {
      const moviesSortTop = [...movies].sort(
        (a, b) => b.vote_average - a.vote_average
      );
      setMoviesSort(moviesSortTop);
    } else if (flop) {
      const moviesSortFlop = [...movies].sort(
        (a, b) => a.vote_average - b.vote_average
      );
      setMoviesSort(moviesSortFlop);
    } else {
      setMoviesSort([]);
    }
  }, [top, movies, setMoviesSort, flop]);

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            placeholder="Entrez le titre d'un film"
          />
          <input type='submit' />
        </form>
      </div>
      <div className='btn-sort-container'>
        <div
          className='btn-sort'
          id={top ? "goodToBadActive" : "goodToBad"}
          onClick={handleClickTop}>
          <p>Top</p> <span> →</span>
        </div>
        <div
          className='btn-sort'
          id={flop ? "badToGoodActive" : "badToGood"}
          onClick={handleClickFlop}>
          <p>Flop</p> <span> →</span>
        </div>
      </div>
    </div>
  );
};

export default Form;
