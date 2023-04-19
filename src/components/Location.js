import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocationMap from "./LocationMap";

const Location = () => {
  return (
    <Container
      id="location"
      sx={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          width: 1200,
          marginTop: 12,
          marginBottom: 8,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Location
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{ padding: 5 }}>
              <LocationMap />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ padding: 8 }}>
              <Typography variant="h6">Contact Info</Typography>
              <Typography>110 Rivercrest Blvd, Allen, TX 75002</Typography>
              <Typography>+1 (234)-567-8910</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Open Hours</Typography>
              <Typography>Monday 07:00 - 22:00</Typography>
              <Typography>Tuesday 07:00 - 22:00</Typography>
              <Typography>Wednesday 07:00 - 22:00</Typography>
              <Typography>Thursday 07:00 - 22:00</Typography>
              <Typography>Friday 08:00 - 20:00</Typography>
              <Typography>Saturday 08:00 - 20:00</Typography>
              <Typography>Sunday 08:00 - 20:00</Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                We are open on holidays!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Location;
