import React, { useState } from "react";
import {
  Box,
  Container,
  InputBase,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

// Container wrapper
const SearchContainer = styled(Box)`
  background-color: #151414;
  padding: 40px 0;
  color: white;
`;

// Search bar and button row
const SearchBarModel = styled(Box)`
  background-color: #151414;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledTextField = {
  "& label": { color: "white" },
  "& label.Mui-focused": { color: "white" },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#151414",
    borderRadius: "8px",
    color: "white",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  
  },
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)"
};

// Options
const genreOptions = ["Action", "Comedy", "Horror", "Romance", "Thriller", "Animation", "Drama"];
const yearOptions = Array.from({ length: 30 }, (_, i) => `${2025 - i}`);
const actorOptions = ["Tom Cruise", "Scarlett Johansson", "Dwayne Johnson", "Emma Watson"];

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState(null);
  const [year, setYear] = useState(null);
  const [actor, setActor] = useState(null);

  const handleSearch = () => {
    console.log("Search:", { searchText, genre, year, actor });
  };

  return (
    <SearchContainer>
      <Container maxWidth="md">
        {/* Search bar with button */}
        <SearchBarModel>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <SearchIcon sx={{ color: "grey", mr: 1 }} />
            <InputBase
              placeholder="Search movies..."
              fullWidth
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                height: "45px",
                color: "white",
                border: "none",
              }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              background: "red",
              borderRadius: "8px",
              px: 4,
              fontWeight: 600,
              height: "45px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ff3333",
                boxShadow: "0 0 10px rgba(255, 0, 0, 0.4)",
              },
            }}
          >
            Search
          </Button>
        </SearchBarModel>

        {/* Filters */}
        <Box
          mt={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Box sx={{ flex: 1, minWidth: "250px" }}>
            <Autocomplete
              options={actorOptions}
              value={actor}
              onChange={(e, newValue) => setActor(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Actor" sx={StyledTextField} />
              )}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "250px" }}>
            <Autocomplete
              options={genreOptions}
              value={genre}
              onChange={(e, newValue) => setGenre(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Genre" sx={StyledTextField} />
              )}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "250px" }}>
            <Autocomplete
              options={yearOptions}
              value={year}
              onChange={(e, newValue) => setYear(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Year" sx={StyledTextField} />
              )}
            />
          </Box>
        </Box>
      </Container>
    </SearchContainer>
  );
};

export default SearchBar;
