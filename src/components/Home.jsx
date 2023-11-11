import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MoviCard/MovieCard";
import { Container } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //fetching data from api using post method
  useEffect(() => {
    const parameter = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          parameter
        );
        setData(response.data.result);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      {data.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </Container>
  );
}

export default Home;
