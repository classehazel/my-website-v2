import React from "react";
import PhotoCard from "../components/PhotoCard";
import Image from "../components/img_3.jpg";
import { Container } from "@mui/material";

const Gallery = () => {
  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          height: 300,
        }}
        maxWidth="100"
      />
      <PhotoCard />
    </>
  );
};

export default Gallery;
