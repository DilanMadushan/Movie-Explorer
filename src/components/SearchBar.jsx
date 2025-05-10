import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { browseMovie } from "../slice/BrowseSlice";
import { useDispatch } from "react-redux";

// Styled components
const SearchContainer = styled(Box)`
  background-color: #151414;
  padding: 40px 0;
  color: white;
`;

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
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
};

const yearOptions = Array.from({ length: 30 }, (_, i) => `${2025 - i}`);
const ratingOptions = Array.from({ length: 10 }, (_, i) => `${10 - i}`);

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState(null);
  const [genreId, setGenreId] = useState(null);
  const [year, setYear] = useState(null);
  const [rating, setRating] = useState(null);
  const [genreOptions, setGenreOptions] = useState([]);

  const dispatch = useDispatch();

  const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const genres = response.data.genres;
      const formattedGenres = genres.map((genre) => ({
        label: genre.name,
        id: genre.id,
      }));
      setGenreOptions(formattedGenres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleSearch = () => {
    dispatch(browseMovie({ searchText, genreId, year, rating }));
  };

  return (
    <SearchContainer sx={{ position: "sticky", top: 63, zIndex: 1 }}>
      <Container maxWidth="md">
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
              options={ratingOptions}
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Rating" sx={StyledTextField} />
              )}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "250px" }}>
            <Autocomplete
              options={genreOptions}
              getOptionLabel={(option) => option.label}
              value={genre}
              onChange={(e, newValue) => {
                setGenre(newValue);
                setGenreId(newValue?.id || null);
              }}
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
