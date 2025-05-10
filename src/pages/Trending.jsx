import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrandingMovies } from "../slice/TrandingSlice";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/Card";

const Tranding = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    if (trending.length === 0) {
      dispatch(getAllTrandingMovies());
    }
  }, [dispatch, trending.length]);

  return (
    <Container sx={{ py: 4, backgroundColor: "#1D1D1D", minHeight: "100vh" }}>
      <Typography variant="h4" color="white" mb={3} ml={1}>
        Top Rated Movies
      </Typography>

      <Grid container spacing={2} justifyContent="flex-start">
        {trending.map((movie) => (
          <Grid item key={movie.id}>
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
    </Container>
  );
};

export default Tranding;
