import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Container
      sx={{
        bgcolor: "#20124D",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
      position="static"
    >
      <Box sx={{ padding: 7 }}>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={3} padding={10} color={"#fff"} columns={2}>
            <Box
              sx={{ alignItems: "baseline", color: "#fff", display: "flex" }}
            >
              <FitbitIcon fontSize="medium" />
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                paddingLeft={1}
                fontSize={24}
                fontFamily={"Helvetica"}
              >
                XERCISE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              MENU
            </Typography>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                HOME
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2/membership"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                MEMBERSHIP
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2/program"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                PROGRAM
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2/gallery"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                GALLERY
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              COMPANY
            </Typography>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Privacy Policy
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Terms of Service
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Contact Us
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Cookie Settings
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/my-website-v2"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Cookie Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              SOCIAL
            </Typography>
            <Box>
              <Link
                href="https://www.instagram.com"
                color={"#fff"}
                paddingRight={1}
              >
                <InstagramIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.youtube.com"
                color={"#fff"}
                paddingRight={1}
              >
                <YouTubeIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.facebook.com"
                color={"#fff"}
                paddingRight={1}
              >
                <FacebookIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.twitter.com"
                color={"#fff"}
                paddingRight={1}
              >
                <TwitterIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                color={"#fff"}
                paddingRight={1}
              >
                <LinkedInIcon fontSize="medium" />
              </Link>
            </Box>
            <Typography variant="subtitle2" color={"#fff"} paddingTop={10}>
              XERCISE @ 2023
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
