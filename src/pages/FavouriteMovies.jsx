import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import CustomCard from "../components/Card";

const FavouriteMovies = () => {
  const favourites = useSelector((state) => state.favourite);

  return (
    <Container sx={{ py: 4, backgroundColor: "#1D1D1D" }}>
      <Typography
        variant="h4"
        color="white"
        marginBottom={3}
        marginLeft={3}
        sx={{ fontSize: { md: "40px", xs: "30px" } }}
      >
        Your Favourite Movies
      </Typography>

      {favourites.length === 0 ? (
        <Typography marginLeft={3} sx={{ color: "gray" }}>
          You haven't added any favorites yet.
        </Typography>
      ) : (
        <>
          <Grid container spacing={2} justifyContent="center">
            {favourites.map((movie) => (
              <CustomCard
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default FavouriteMovies;
