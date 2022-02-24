import React from "react";
import { Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Logo from "../../assets/images/Nstant_food.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "7rem",
    paddingBottom: "4.75rem",
    "@media screen and (max-width: 900px)": {
      flexDirection: "column",
      textAlign: "center",
      paddingTop: "4rem",
      paddingBottom: "4.75rem",
    },
  },
  logoContainer: {
    "& img": {
      width: "50%",
    },
    "@media screen and (max-width: 900px)": {
      marginBottom: "2rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container
        className={classes.container}
        style={{
          display: "flex",
        }}
      >
        <Box className={classes.logoContainer}>
          <img src={Logo} alt="Nstant food delivery app logo" />
        </Box>

        <Box style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "20px" }}>Contact</h2>
          <p>
            info@thebreld.co.ke <br /> +254710752939
          </p>
        </Box>

        <p>Nstant Food &copy;Copyright 2022</p>
      </Container>
    </footer>
  );
};

export default Footer;
