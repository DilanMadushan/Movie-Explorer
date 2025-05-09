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
import { useNavigate } from "react-router-dom";

const FavouriteMovies = () => {
  const favourites = useSelector((state) => state.favourite);

  const navigate = useNavigate();

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
              <Card sx={{ backgroundColor: "#1e1e1e", color: "white" }}onClick={() => {
              navigate(`/movie/${movie.id}`);
            }} >
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  height="400"
                />
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography variant="body2" color="gray">
                    {movie.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FavouriteMovies;
