import React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import DeblurIcon from "@mui/icons-material/Deblur";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { findMoviebyName, getAllMovies } from "../slice/MovieSlice";
import { Link } from "react-router-dom";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled(Box)({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "1rem",
  width: "40%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const SearchBarModel = styled(Box)({
  backgroundColor: "#151414",
  padding: "0 10px",
  borderRadius: "8px",
  width: "50%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 0 10px rgba(194, 194, 194, 0.1)",
});

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));


const NavBar = () => {

const dispatch = useDispatch();

const movies = useSelector((state) => state.movie);

const findMovie = (movie) => {
    dispatch(findMoviebyName(movie));
};
  const [open, setOpen] = useState(false);

  const contentList = [
  { text: "Home", path: "/home" },
  { text: "Trending", path: "/trending" },
  { text: "Favorites", path: "/favourite" },
];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#151414", overflowX: "hidden"}}>
      <StyledToolBar>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DeblurIcon sx={{color: "red",width: "50px",height: "50px"}}/>
          <Typography
            variant="h5"
            fontFamily={"serif"}
          >
            Movie Explorer
          </Typography>
        </Box>

        <SearchBarModel>
          <SearchIcon sx={{ color: "grey" }} />
          <InputBase
            placeholder="Search movies..."
            fullWidth
            onChange={(e) => findMovie(e.target.value)}
            sx={{
              height: "45px",
              color: "white",
              border: "none",
            }}
          />
        </SearchBarModel>

        <Content>
          {contentList.map((item) => (
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "white" }}
              key={item.text}
            >
              {item.text}
            </Link>
          ))}
        </Content>

        <IconButton
          sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: "60vw", height: "100vh", bgcolor: "#151414",fontSize: "16px" }}>
          <List>
            {contentList.map((text) => (
              <ListItem button key={text} sx={{ color: "white",marginTop: "20px" }}>
                <ListItemText primary={text} fontFamily={""}/>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
