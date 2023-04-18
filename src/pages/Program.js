import React from "react";
import ProgCard from "../components/ProgCard";
import Image from "../components/img_2.jpg";
import { Container } from "@mui/material";

const Program = () => {
  return (
    <>
      <Container
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          height: 300,
        }}
        maxWidth="100"
      />
      <ProgCard />
    </>
  );
};

export default Program;
