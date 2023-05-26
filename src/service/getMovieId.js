import axios from "axios";

const getMovieId = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8af80cd06092184fb872a17ba7ddc7c5`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error.response);
    throw error;
  }
};

export default getMovieId;
