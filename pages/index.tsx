import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Navbar } from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />

      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.main",
        }}
      >
        asdasd
      </Box>
    </Container>
  );
};

export default Home;
