import {
  AppBar,
  Box,
  Button,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import React from "react";
import FitbitIcon from "@mui/icons-material/Fitbit";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          bgcolor: "#20124D",
          height: 65,
          justifyContent: "center",
          display: "flex",
        }}
        // position="static"
      >
        <Toolbar>
          <FitbitIcon sx={{ fontSize: 23, color: "#fff" }} />
          <Button href="/" sx={{ fontSize: 23 }}>
            Xercise
          </Button>

          <Box marginLeft={"auto"}>
            <Button href="/" sx={{ fontSize: 16 }}>
              Home
            </Button>
            <Button href="/membership" sx={{ fontSize: 16 }}>
              Membership
            </Button>
            <Button href="/program" sx={{ fontSize: 16 }}>
              Program
            </Button>
            <Button href="/gallery" sx={{ fontSize: 16 }}>
              Gallery
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
