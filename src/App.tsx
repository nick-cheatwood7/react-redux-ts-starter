import React from "react";
import { Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import "./App.css";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Counter />
      </Grid>
    </>
  );
};

export default App;
