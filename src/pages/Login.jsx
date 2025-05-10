import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(https://images8.alphacoders.com/122/1221309.jpg)`, // Replace with your movie poster URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        }}
      />

      <Paper
        elevation={10}
        sx={{
          backgroundColor: "#1e1e1e",
          p: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 400,
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", mb: 3, textAlign: "center" }}
        >
          Sign In
        </Typography>

        <TextField
          fullWidth
          variant="filled"
          label="Username"
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              backgroundColor: "#333",
              color: "white",
              outline: "none",
              boxShadow: "none",
            },
            disableUnderline: true,
          }}
          sx={{
            mb: 2,
            "& .MuiFilledInput-root": {
              borderRadius: "4px",
            },
            "& .MuiFilledInput-root:before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:after": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "#333",
              boxShadow: "none",
            },
          }}
        />

        <TextField
          fullWidth
          type="password"
          variant="filled"
          label="Password"
          InputLabelProps={{ style: { color: "#ccc" } }}
          InputProps={{
            style: {
              backgroundColor: "#333",
              color: "white",
              outline: "none",
              boxShadow: "none",
            },
            disableUnderline: true,
          }}
          sx={{
            mb: 3,
            "& .MuiFilledInput-root": {
              borderRadius: "4px",
            },
            "& .MuiFilledInput-root:before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:after": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "#333",
              boxShadow: "none",
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#e50914",
            color: "white",
            fontWeight: "bold",
            boxShadow: "none",
            outline: "none",
            "&:hover": {
              bgcolor: "#f6121d",
              boxShadow: "none",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
          onClick={() => navigate("/home")}
        >
          Login
        </Button>

        <Typography sx={{ mt: 2, color: "#888", fontSize: "14px", textAlign: "center" }}>
          New to Movie Explorer?{" "}
          <span style={{ color: "white", cursor: "pointer" }}>Sign up now</span>.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
