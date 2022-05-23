import React from "react";
import { AppBar, Container, Typography, Toolbar } from "@mui/material";
import logo from "../logo.svg";

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Image */}
          <img alt="React Logo" src={logo} width="50" height="30" />

          {/* Title */}
          <Typography>React + Typescript Starter</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
