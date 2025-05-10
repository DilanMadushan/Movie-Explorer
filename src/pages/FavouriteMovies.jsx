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
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ color: "white", marginBottom: 3 }}>
        Your Favourite Movies
      </Typography>

      {favourites.length === 0 ? (
        <Typography sx={{ color: "gray" }}>
          You haven't added any favorites yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favourites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
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
  );
};

export default FavouriteMovies;
