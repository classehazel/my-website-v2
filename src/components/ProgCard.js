import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ProgCard = () => {
  return (
    <Container
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
          marginBottom: 11,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Xercise Program
        </Typography>
        <Grid container spacing={3} sx={{ marginY: 5 }}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYWwlMjB0cmFpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Personal Training</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    Personal training may focus on strength training, cardio
                    fitness, flexibility, and overall health and wellness. The
                    trainer may also offer nutritional guidance and lifestyle
                    advice to promote healthy habits outside of the gym.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHBlcnNvbmFsJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Free Weight Zone</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    Our free weight zone is equipped with a wide range of
                    weights, including dumbbells, barbells, and weight plates,
                    as well as weight benches, squat racks, and other equipment
                    to support your weightlifting routine.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHBlcnNvbmFsJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Yoga Class</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    If you are looking to relieve stress or increase your
                    strength, our yoga class is a great place to start. We offer
                    a variety of yoga styles to suit your individual needs, from
                    gentle and restorative to more vigorous and challenging
                    classes.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1541689186060-3b08be2fd22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBlcnNvbmFsJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Aqua Aerobics</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    This fun and low-impact workout takes place in our indoor
                    pool and is perfect for individuals looking to get a great
                    cardio and strength workout without putting stress on their
                    joints. Our certified instructors will lead you through a
                    series of exercises.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1546749876-2088f8b19e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbmFsJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Crossfit</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    CrossFit is a high-intensity fitness program that combines
                    weightlifting, gymnastics, and metabolic conditioning to
                    help you achieve your fitness goals and reach your full
                    potential.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHp1bWJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Zumba Dance</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    Zumba is a fun and energetic fitness program that combines
                    Latin-inspired dance moves with cardio exercise to help you
                    burn calories, improve your coordination, and boost your
                    mood.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia>
                  <img
                    src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbmFsJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="img"
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6">Stretching & Relaxing</Typography>
                  <Divider />
                  <Typography variant="body2" sx={{marginY: 2}}>
                    Our stretching zone is equipped with various tools and
                    equipment, including foam rollers, resistance bands, yoga
                    mats, and more, to help you perform a variety of stretches
                    and mobility exercises.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProgCard;
