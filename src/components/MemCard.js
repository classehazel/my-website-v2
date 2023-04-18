import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import StarsIcon from "@mui/icons-material/Stars";

// const plans = [
//   {
//     title: "Basic",
//     price: "9.99",
//     description: ["Accessible 24/7", "1 time Free PT"],
//   },
//   {
//     title: "Extreme",
//     price: "19.99",
//     description: [
//       "Accessible 24/7",
//       "3 time Free PT",
//       "Personal locker provided",
//       "You can join 3 different classes",
//     ],
//   },
//   {
//     title: "Supreme",
//     subtitle: "Most Popular",
//     price: "29.99",
//     description: [
//       "Accessible 24/7",
//       "5 time Free PT",
//       "Personal locker provided",
//       "You can join 7 different classes",
//       "One Free protein drink per day",
//     ],
//   },
// ];

const MemCard = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ justifyContent: "center", width: 1200, marginTop: 12, marginBottom: 16 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Membership Plans
        </Typography>
        <Typography variant="h6" marginTop={5} marginBottom={10} align="center">
          Check out which one fits best for you!
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Card sx={{ width: 300, height: 400 }}>
              <CardHeader
                title="Basic"
                sx={{
                  backgroundColor: "#130a2e",
                  color: "#fff",
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography variant="h3">$9.99</Typography>
                  <Typography variant="h6">/month</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <List>
                    <Typography variant="subtitle1">Accessible anytime</Typography>
                    <Typography variant="subtitle1">1 time Free PT</Typography>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ width: 300, height: 400 }}>
              <CardHeader
                title="Extreme"
                sx={{
                  backgroundColor: "#130a2e",
                  color: "#fff",
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography variant="h3">$29.99</Typography>
                  <Typography variant="h6">/month</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <List>
                    <Typography variant="subtitle1">Accessible anytime</Typography>
                    <Typography variant="subtitle1">3 time Free PT</Typography>
                    <Typography variant="subtitle1">
                      Personal locker provided
                    </Typography>
                    <Typography variant="subtitle1">
                      You can join 3 different classes
                    </Typography>
                  </List>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                  <StarsIcon sx={{ color: "#f1c232" }} />
                  <Typography variant="subtitle2">Most Popular</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ width: 300, height: 400 }}>
              <CardHeader
                title="Supreme"
                sx={{
                  backgroundColor: "#130a2e",
                  color: "#fff",
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography variant="h3">$59.99</Typography>
                  <Typography variant="h6">/month</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <List>
                    <Typography variant="subtitle1">Accessible anytime</Typography>
                    <Typography variant="subtitle1">5 time Free PT</Typography>
                    <Typography variant="subtitle1">
                      Personal locker provided
                    </Typography>
                    <Typography variant="subtitle1">
                      You can join 7 different classes
                    </Typography>
                    <Typography vatiant="subtitle1">
                      One Free protein drink per day
                    </Typography>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MemCard;
