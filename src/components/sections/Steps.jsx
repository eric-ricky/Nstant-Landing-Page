import React from "react";
import { Box, Typography } from "@mui/material";
import Section from "./partials/Section";
import { makeStyles } from "@mui/styles";

import Search from "../../assets/images/search.png";
import Choose from "../../assets/images/choose.png";
import Recieve from "../../assets/images/recieve.png";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "4rem 0",
    padding: "0 7rem",
    marginBottom: "7rem",

    "@media screen and (max-width: 900px)": {
      padding: "0",
      flexDirection: "column",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
}));

const steps = [
  {
    img: Search,
    text: "Search for nearby restaurant",
  },
  {
    img: Choose,
    text: "Choose your tastey food",
  },
  {
    img: Recieve,
    text: "Food is on it’s way",
  },
];

const Steps = () => {
  const classes = useStyles();
  return (
    <Section
      id="steps"
      title="Here's how it works"
      style={{ marginBottom: "4rem" }}
    >
      <Box className={classes.content}>
        {steps.map((item, i) => (
          <Box className={classes.item} key={i}>
            <img src={item.img} alt="search item" style={{ height: "125px" }} />
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "24px",
                width: "75%",
                marginTop: "35px",
                marginBottom: "2.75rem",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default Steps;
