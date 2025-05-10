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

  useEffect(() => {
    if (!movieDetail || movieDetail.id !== parseInt(id)) {
      dispatch(findMovieById(id));
      console.log(movieDetail);
    }
  }, [dispatch, id, movieDetail]);

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , width: { xs: "100%", md: 300 }}}>
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

          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path}`}
            alt={movieDetail?.title}
            sx={{
              width: { xs: "100%", md: 300 },
              borderRadius: 2,
              boxShadow: 5,
            }}
          />
        </Box>

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
            {movieDetail?.genres?.map((genre) => (
              <Chip
                key={genre?.id}
                label={genre?.name}
                sx={{ backgroundColor: "#D20C0C", color: "white" }}
              />
            ))}
          </Box>

          {movieDetail.cast && movieDetail.cast.length > 0 && (
            <>
              <Divider sx={{ backgroundColor: "#555", my: 2 }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Cast
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  overflowX: "auto",
                  pb: 2,
                }}
              >
                {movieDetail.cast.slice(0, 12).map((actor) => (
                  <Box
                    key={actor.id}
                    sx={{
                      width: 120,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <Avatar
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                          : ""
                      }
                      alt={actor.name}
                      sx={{ width: 80, height: 80, mb: 1 }}
                    />
                    <Typography variant="body2" noWrap>
                      {actor.name}
                    </Typography>
                    <Typography variant="caption" color="gray" noWrap>
                      as {actor.character}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>

      {movieDetail?.trilers?.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Official Trailer
          </Typography>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 aspect ratio
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 5,
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${movieDetail.trilers[0].key}`}
              title={movieDetail.trilers[0].name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Movie;
