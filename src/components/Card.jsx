import React from "react";
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
import { useNavigate } from "react-router-dom";

const CustomCards = (props) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 200,
        backgroundColor: "transparent",
        boxShadow: "none",
        textAlign: "center",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "0.3s",
        },
      }}
      onClick={() => navigate(`/movie/${props.id}`)}
    >
      <CardMedia
        component="img"
        height="250"
        image={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
        alt={props.title}
        sx={{ borderRadius: "10px" }}
      />
      <Box mt={1} ml={1} sx={{ textAlign: "left" }}>
        <Typography variant="body2" color="white" noWrap>
          {props.title}
        </Typography>
        <Typography variant="caption" color="white">
          {props.release_date.slice(0, 4)}
        </Typography>
        <Typography variant="caption" color="white">
          ⭐ {props.vote_average.toFixed(1)}
        </Typography>
      </Box>
    </Card>
  );
};

export default CustomCards;
