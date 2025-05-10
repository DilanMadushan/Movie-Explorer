import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../slice/MovieSlice";
import CustomCard from "../components/Card";
import SearchBar from "../components/SearchBar";

const Browse = () => {
  const dispatch = useDispatch();
  const browseMovies = useSelector((state) => state.browse);
  const populerMovies = useSelector((state) => state.movie);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (populerMovies.length === 0) {
      dispatch(getAllMovies());
    }
  }, [dispatch, populerMovies.length]);

  const handleSearchTriggered = () => {
    setHasSearched(true);
  };

  let moviesToRender = [];

  if (browseMovies.length > 0) {
    moviesToRender = browseMovies;
  } else if (hasSearched) {
    moviesToRender = [];
  } else {
    moviesToRender = populerMovies;
  }

  return (
    <>
      <SearchBar onSearch={handleSearchTriggered} />

      <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
        <Typography
          variant="h4"
          color="white"
          mb={3}
          ml={3}
          sx={{ fontSize: { md: "40px", xs: "30px" } }}
        >
          {hasSearched ? "Search Results" : "Search Results"}
        </Typography>

        {moviesToRender.length === 0 ? (
          <Typography color="gray" textAlign="center">
            {hasSearched ? "No movies found" : "Loading..."}
          </Typography>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {moviesToRender
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                  <CustomCard
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Browse;
