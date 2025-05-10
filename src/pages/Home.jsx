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
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movie);

  const navigate = useNavigate();

  useEffect(() => {
    if (movies?.length === 0) {
      dispatch(getAllMovies());
    }
  }, [dispatch, movies?.length]);

  return (
    <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
      <Typography variant="h4" color="white" marginBottom={3} marginLeft={3} sx={{fontSize:{md:'40px',xs:'30px'}}}>
        Top Reted Movies
      </Typography>

      {movies?.length === 0 ? (
        <Typography sx={{ color: "gray" }}>Loading...</Typography>
      ) : (

        <>
          <Grid container spacing={2} justifyContent="center">
            {movies?.map((movie) => (
              <CustomCard
                id={movie?.id}
                poster_path={movie?.poster_path}
                title={movie?.title}
                release_date={movie?.release_date}
                vote_average={movie?.vote_average}
                overview={movie?.overview}
              />
            ))}
          </Grid>
        </>

      )}
    </Container>
  );
};

export default Home;
