import React from "react";
import MemCard from "../components/MemCard";
import Image from "../components/img_1.jpg";
import { Container } from "@mui/material";

const Membership = () => {
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
      <MemCard />
    </>
  );
};

export default Membership;
