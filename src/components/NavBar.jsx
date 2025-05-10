import React, { useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { findMoviebyName } from "../slice/MovieSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBarModel = styled(Box)(({ theme }) => ({
  backgroundColor: "#151414",
  padding: "0 10px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 0 10px rgba(194, 194, 194, 0.1)",
  width: "40%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchBarMobile = styled(Box)({
  backgroundColor: "#151414",
  padding: "10px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  border: "1px solid #333",
});

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  "& a": {
    color: "white",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      color: "red",
    },
  },
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const findMovie = (movie) => {
    dispatch(findMoviebyName(movie));
  };

  const contentList = [
    { text: "Home", path: "/home" },
    { text: "Trending", path: "/trending" },
    { text: "Browse", path: "/browse" },
    { text: "Favorites", path: "/favourite" },
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#151414", px: 2 }}>
        <StyledToolBar>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <DeblurIcon
              sx={{ color: "red", fontSize: { xs: 30, sm: 40, md: 50 } }}
            />
            <Typography
              variant="h6"
              color="white"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" } }}
            >
              Movie Explorer
            </Typography>
          </Box>

          <SearchBarModel>
            <SearchIcon sx={{ color: "grey" }} />
            <InputBase
              placeholder="Search movies..."
              onChange={(e) => findMovie(e.target.value)}
              sx={{
                height: "45px",
                color: "white",
                fontSize: "1rem",
                border: "none",
              }}
            />
          </SearchBarModel>

          <Content>
            {contentList.map((item) => (
              <Link key={item.text} to={item.path}>
                {item.text}
              </Link>
            ))}
          </Content>

          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolBar>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: "65vw",
              height: "100vh",
              bgcolor: "#151414",
              color: "white",
              py: 4,
              px: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <SearchBarMobile>
              <SearchIcon sx={{ color: "grey" }} />
              <InputBase
                placeholder="Search movies..."
                fullWidth
                onChange={(e) => findMovie(e.target.value)}
                sx={{
                  height: "40px",
                  color: "white",
                  fontSize: "1rem",
                  border: "none",
                }}
              />
            </SearchBarMobile>

            <List>
              {contentList.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2e2e2e",
                    py: 2,
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
};

export default NavBar;
