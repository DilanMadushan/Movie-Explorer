import React, { useState } from "react";
import {
  Box,
  Container,
  InputBase,
  TextField,
  Autocomplete,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchContainer = styled(Box)({
  backgroundColor: "#151414",
  padding: "40px 0",
  color: "white",
});

const SearchBarModel = styled(Box)({
  backgroundColor: "#151414",
  padding: "0 10px",
  borderRadius: "8px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0 0 10px rgba(255,255,255,0.1)",
});

const genreOptions = [
  "Action",
  "Comedy",
  "Horror",
  "Romance",
  "Thriller",
  "Animation",
  "Drama",
];

const yearOptions = Array.from({ length: 30 }, (_, i) => `${2025 - i}`);

const actorOptions = [
  "Tom Cruise",
  "Scarlett Johansson",
  "Dwayne Johnson",
  "Emma Watson",
];

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
        {/* Search input bar */}
        <SearchBarModel>
          <SearchIcon sx={{ color: "grey" }} />
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
        </SearchBarModel>

         <Grid container spacing={2} mt={3} alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={actorOptions}
              value={actor}
              onChange={(e, newValue) => setActor(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Actor"
                  sx={{
                    "& label": { color: "white" },
                    "& label.Mui-focused": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#151414",
                      borderRadius: "8px",
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
                  }}
                />
              )}
            />
          </Grid>

          {/* Genre Filter */}
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={genreOptions}
              value={genre}
              onChange={(e, newValue) => setGenre(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Genre"
                  sx={{
                    "& label": { color: "white" },
                    "& label.Mui-focused": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#151414",
                      borderRadius: "8px",
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
                  }}
                />
              )}
            />
          </Grid>

          {/* Year Filter */}
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              options={yearOptions}
              value={year}
              onChange={(e, newValue) => setYear(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Year"
                  sx={{
                    "& label": { color: "white" },
                    "& label.Mui-focused": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#151414",
                      borderRadius: "8px",
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
                  }}
                />
              )}
            />
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                height: "56px",
                backgroundColor: "red",
                borderRadius: "8px",
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>
    </SearchContainer>
  );
};

export default SearchBar;
