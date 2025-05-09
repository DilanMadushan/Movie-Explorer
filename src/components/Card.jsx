import React from 'react'
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

const CustomCards = (props) => {
  return (
    <Card
            sx={{
              maxWidth: 200,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              textAlign: "center",
              "&:hover": {
                transform: "scale(1.03)",
                transition: "0.3s",
              },
            }}
          >
            <CardMedia
              component="img"
              height="250"
              // width={200}
              image={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
              alt={props.title}
              sx={{
                borderRadius: "10px",
              }}
            />
            <Box mt={0.5} ml={1} sx={{ textAlign: "left",display: 'flex',flexDirection: 'column' }}>
              <Typography
                variant="p"
                sx={{ color: "white",}}
              >
                {props.title}
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "white",}}
              >
                {props.release_date}
              </Typography>
            </Box>
          </Card>
  )
}

export default CustomCards