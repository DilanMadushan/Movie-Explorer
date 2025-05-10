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
import CustomCard from "../components/Card";

const Tranding = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    if (trending?.length === 0) {
      dispatch(getAllTrandingMovies());
    }
  }, [dispatch, trending?.length]);

  return (
    <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
      <Typography
        variant="h4"
        color="white"
        marginBottom={3}
        marginLeft={3}
        sx={{ fontSize: { md: "40px", xs: "30px" } }}
      >
        Tranding Movies
      </Typography>

      {trending?.length === 0 ? (
        <Typography sx={{ color: "gray" }}>Loading...</Typography>
      ) : (
        <>
          <Grid container spacing={2} justifyContent="center">
            {trending?.map((movie) => (
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

export default Tranding;
