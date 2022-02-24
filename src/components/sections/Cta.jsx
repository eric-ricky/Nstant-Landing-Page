import React from "react";
import { Box, hexToRgb, Typography } from "@mui/material";
import Section from "./partials/Section";
import { makeStyles } from "@mui/styles";

import Hero from "../../assets/images/banner.png";
import Form from "../ui/Form";

import BG from "../../assets/images/bg_food.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "grid",
    placeItems: "center",
    minHeight: "70vh",
    backgroundImage: `linear-gradient(to right, rgba(60, 30, 133, 0.8), rgba(32, 8, 65, 0.8),rgba(45, 16, 85, 0.5)),url(${BG})`,
    backgroundImage: `linear-gradient(40deg, rgba(69,202,252,0.9), rgba(48,63,159,0.9)),url(${BG})`,
    // backgroundImage: `linear-gradient(40deg, rgba(255,110,196,0.9), rgba(120,115,245,0.9)),url(${BG})`,

    marginTop: "2rem",
  },
  content: {
    paddingBottom: "4rem",
    "@media screen and (max-width: 900px)": {
      paddingTop: "2rem",
    },
  },
  text: {
    "& h5": {
      fontWeight: "700",
      fontSize: "52px",
      width: "550px",
      lineHeight: "61.5px",
      color: "#fff",

      "@media screen and (max-width: 900px)": {
        width: "100%",
      },
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "300",
      width: "550px",
      lineHeight: "28px",
      color: "whitesmoke",

      "& span": {
        textDecoration: "underline",
        borderBottom: "1px solid #5b1f9b",
        background: "linear-gradient(89.97deg, #ff111d 1.84%, #000 102.67%)",
        backgroundClip: "text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      },

      "@media screen and (max-width: 900px)": {
        width: "100%",
      },
    },
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "28px",
    width: "500px",
    margin: "2rem 0 !important",

    "@media screen and (max-width: 900px)": {
      width: "100%",
    },
  },
  focus: {
    textDecoration: "underline",
    borderBottom: "1px solid #5b1f9b",
    background: "linear-gradient(89.97deg, #5b1f9b 1.84%, #b44f18 102.67%)",
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}));

const Cta = () => {
  const classes = useStyles();
  return (
    <Section id="start" title="" className={classes.section}>
      <Box className={classes.content}>
        <Box className={classes.text}>
          <h5>Be the first to know when we launch</h5>

          <br />

          <p>
            Get notified when we launch. Enjoy{" "}
            <span className={classes.focus}>
              free delivery and many other discounts
            </span>{" "}
            exclusive for first users.
          </p>
        </Box>

        <Form
          message="Notify me"
          style={{ width: "340px", marginTop: "4rem" }}
        />
      </Box>
    </Section>
  );
};

export default Cta;
