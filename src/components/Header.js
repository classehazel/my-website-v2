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
import { Link } from "react-scroll";

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
          <Button href="/my-website-v2" sx={{ fontSize: 23 }}>
            Xercise
          </Button>

          <Box marginLeft={"auto"}>
            <Button href="/my-website-v2" sx={{ fontSize: 16 }}>
              Home
            </Button>
            <Button href="/my-website-v2/membership" sx={{ fontSize: 16 }}>
              Membership
            </Button>
            <Button href="/my-website-v2/program" sx={{ fontSize: 16 }}>
              Program
            </Button>
            <Button href="/my-website-v2/gallery" sx={{ fontSize: 16 }}>
              Gallery
            </Button>
            <Button sx={{ fontSize: 16 }}>
              <Link to="location" smooth={false} offset={-50}>
                Location
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
