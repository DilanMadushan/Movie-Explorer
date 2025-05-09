import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../slice/MovieSlice";
import { findMovieById } from '../slice/MovieDetailSlice';

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movie);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getAllMovies());
    }
  }, [dispatch, movies.length]);

  return (
    <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
      <Typography variant="h4" color="white" marginBottom={3} marginLeft={3}>
        Top Reted Movies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <Card
            sx={{
              maxWidth: 200,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              textAlign: "center",
              "&:hover": {
                transform: "scale(1.03)",
                transition: "0.3s",
              },
            }}
            onClick={() => {
              dispatch(findMovieById(movie.id));
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              sx={{
                borderRadius: "10px",
              }}
            />
            <Box
              mt={0.5}
              ml={1}
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="p" sx={{ color: "white" }}>
                {movie.title}
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                {movie.release_date}
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                {movie.vote_average}
              </Typography>
            </Box>
          </Card>
        ))}
      </Grid>

    </Container>
  );
};

export default Home;
