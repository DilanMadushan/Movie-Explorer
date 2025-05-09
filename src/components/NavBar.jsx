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

const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const contentList = ["Home", "Trending", "Browse Movies"];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#151414", overflowX: "hidden" }}>
      <StyledToolBar>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DeblurIcon sx={{color: "red"}}/>
          <Typography
            variant="h6"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Movie Explorer
          </Typography>
        </Box>

        <SearchBar>
          <SearchIcon sx={{ color: 'grey' }} />
          <InputBase placeholder="Search..." />
        </SearchBar>

        <Content>
          {contentList.map((item) => (
            <Typography key={item}>{item}</Typography>
          ))}
        </Content>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: "60vw", height: "100vh", bgcolor: "#3A59D1" }}>
          <List>
            {contentList.map((text) => (
              <ListItem button key={text} sx={{ color: "white",marginTop: "20px"}}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
