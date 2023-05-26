import axios from "axios";

const getMovies = (setMovies, search) => {
  try {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=8af80cd06092184fb872a17ba7ddc7c5&query=${search}&language=fr-FR`
      )
      .then((res) => setMovies(res.data.results));
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export default getMovies;
