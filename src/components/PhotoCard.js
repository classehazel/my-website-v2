import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const PhotoCard = () => {
  return (
    <Container
      sx={{
        bgcolor: "#130a2e",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
    >
      <Box
        sx={{
          justifyContent: "center",
          width: 1200,
          marginTop: 12,
          marginBottom: 11,
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
          Xercise Gallery
        </Typography>
        <Grid container spacing={3} sx={{ marginY: 5 }}>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1537289150563-b7f10eee353b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ width: 280, height: 210 }}>
              <img
                src="https://images.unsplash.com/photo-1603077492579-39ff927823db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PhotoCard;
