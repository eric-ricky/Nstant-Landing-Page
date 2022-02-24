import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#123456",
    fontSize: "48px",
    fontWeight: "700",
    textAlign: "center",
  },
}));
const Section = ({ title, children, ...props }) => {
  const classes = useStyles();
  return (
    <section {...props}>
      <Container style={{ paddingTop: "5rem" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className={classes.title}>{title}</h2>
        </Box>
        {children}
      </Container>
    </section>
  );
};

export default Section;
