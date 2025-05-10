import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../slice/MovieSlice";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  useEffect(() => {
    if (movies?.length === 0) {
      dispatch(getAllMovies());
    }
  }, [dispatch, movies?.length]);

  return (
  <>
  <SearchBar></SearchBar>
  <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
      <Typography
        variant="h4"
        color="white"
        marginBottom={3}
        marginLeft={3}
        sx={{ fontSize: { md: "40px", xs: "30px" } }}
      >
        Top Rated Movies
      </Typography>

      {movies?.length === 0 ? (
        <Typography sx={{ color: "gray" }}>Loading...</Typography>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {movies
            .filter((movie) => movie.poster_path) 
            .map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <CustomCard
                  id={movie?.id}
                  poster_path={movie?.poster_path}
                  title={movie?.title}
                  release_date={movie?.release_date}
                  vote_average={movie?.vote_average}
                  overview={movie?.overview}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  </>
    
  );
};

export default Home;
