import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMovieById } from "../slice/MovieDetailSlice";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Link } from "@mui/material";

const Movie = () => {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetailes);

  const { id } = useParams();

  useEffect(() => {
    if (!movieDetail || movieDetail.id !== parseInt(id)) {
      dispatch(findMovieById(id));
    }
  }, [dispatch, id, movieDetail]);

  return (
    //     <div style={{ padding: 20, color: 'white', backgroundColor: 'red' }}>
    //     {movieDetail ? (
    //       <div>
    //         <h2>{movieDetail.title}</h2>
    //         <p>{movieDetail.overview}</p>
    //         <p><strong>Release Date:</strong> {movieDetail.release_date}</p>
    //         <img
    //           src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
    //           alt={movieDetail.title}
    //           style={{ width: 300, borderRadius: 10 }}
    //         />
    //         <img
    //           src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
    //           alt={movieDetail.title}
    //           style={{ width: 300, borderRadius: 10 }}
    //         />

    //       </div>
    //     ) : (
    //       <p>Loading movie details...</p>
    //     )}
    //   </div>
    <>
      <Container>
        <Typography
          variant="h5"
          color="initial"
          sx={{ color: "white", fontSize: "30px", fontWeight: "bold" }}
        >
          {movieDetail?.title}
        </Typography>

        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
          alt="My image"
          sx={{
            width: 300,
            borderRadius: 2,
          }}
        />


        <Typography variant="body1" color="initial" sx={{ color: "white" }}>
          {movieDetail?.overview}
        </Typography>
        <Typography variant="body1" color="initial" sx={{ color: "white" }}>
          <strong>Release Date:</strong> {movieDetail?.release_date}
        </Typography>
        <Box>
          <Typography variant="p" color="initial" sx={{ color: "white" }}>
            {movieDetail?.vote_average}
          </Typography>
        </Box>

        <Link href={movieDetail?.homepage}>Link</Link>

      </Container>
    </>
  );
};

export default Movie;
