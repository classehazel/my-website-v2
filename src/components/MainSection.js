import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Image from "./mainImage.jpg";

const MainSection = () => {
  return (
    <Container
      id="main"
      sx={{
        // backgroundColor: "#20124D",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
    >
      <Box
        sx={{
          padding: 10,
          justifyContent: "center",
          display: "flex",
          marginY: 8,
          minHeight: 300,
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ marginY: 5, color: "#fff" }}>
            What are you waiting for?
          </Typography>
          <Typography variant="h4" sx={{ color: "#fff" }}>
            COME AND JOIN US!
          </Typography>
          <Box sx={{ marginY: 5 }}>
            <Button
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "#fff",
                },
                borderColor: "#fff",
                color: "#fff",
              }}
              size="large"
              href="/membership"
            >
              Explore
            </Button>
            <Button
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "#fff",
                },
                marginLeft: 5,
                borderColor: "#fff",
                color: "#fff",
              }}
              size="large"
              href="/program"
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainSection;
