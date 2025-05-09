import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMovieById } from "../slice/MovieDetailSlice";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Link,
  Chip,
  Divider,
  Rating,
  Avatar,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { addFavourite, removeFavourite } from "../slice/FavouriteSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetail = useSelector((state) => state.movieDetailes);
  const favourites = useSelector((state) => state.favourite);

  const [liked, setLiked] = useState(false);

  // Fetch movie details
  useEffect(() => {
    if (!movieDetail || movieDetail.id !== parseInt(id)) {
      dispatch(findMovieById(id));
    }
  }, [dispatch, id, movieDetail]);

  // Sync liked status with Redux favourites
  useEffect(() => {
    const isLiked = favourites.some((fav) => fav.id === parseInt(id));
    setLiked(isLiked);
  }, [favourites, id]);

  const handleToggleFavourite = () => {
    if (liked) {
      dispatch(removeFavourite(movieDetail));
    } else {
      dispatch(addFavourite(movieDetail));
    }
    setLiked(!liked);
  };

  if (!movieDetail) {
    return (
      <Box sx={{ padding: 5, color: "white", textAlign: "center" }}>
        Loading movie details...
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5, color: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
          alt={movieDetail?.title}
          sx={{
            width: { xs: "100%", md: 300 },
            borderRadius: 2,
            boxShadow: 5,
          }}
        />

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {movieDetail?.title} ({movieDetail?.release_date.slice(0, 4)})
          </Typography>

          <Divider sx={{ backgroundColor: "#555" }} />

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            {movieDetail?.overview}
          </Typography>

          <Typography variant="body2">
            <strong>Release Date:</strong> {movieDetail?.release_date}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Rating
              name="read-only"
              value={movieDetail?.vote_average / 2}
              precision={0.1}
              readOnly
            />
            <Typography variant="body2">
              {movieDetail?.vote_average.toFixed(1)} / 10
            </Typography>

            <IconButton onClick={handleToggleFavourite}>
              {liked ? (
                <Favorite sx={{ color: "red" }} />
              ) : (
                <FavoriteBorder sx={{ color: "white" }} />
              )}
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {movieDetail?.genres.map((genre) => (
              <Chip
                key={genre?.id}
                label={genre?.name}
                sx={{ backgroundColor: "#D20C0C", color: "white" }}
              />
            ))}
          </Box>

          <Divider sx={{ backgroundColor: "#555", my: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Production Companies
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            {movieDetail?.production_companies.map((company) => (
              <Box
                key={company?.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  p: 1,
                  borderRadius: 2,
                }}
              >
                {company.logo_path && (
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w200/${company?.logo_path}`}
                    alt={company.name}
                    sx={{ width: 40, height: 40, bgcolor: "#fff" }}
                  />
                )}
                <Typography variant="body2" sx={{ width: "100px" }}>
                  {company?.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {movieDetail.homepage && (
            <Link
              href={movieDetail.homepage}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{
                color: "white",
                mt: 2,
                cursor: "pointer",
                textDecoration: "none",
                marginBottom: 5,
              }}
            >
              Visit Official Site
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Movie;
