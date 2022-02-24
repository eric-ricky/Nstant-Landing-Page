import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import BannerImg from "../../assets/images/image.png";
import BG from "../../assets/images/bg_pattern.png";
import Form from "../ui/Form";

const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100%",
    backgroundImage: `linear-gradient(to right, rgba(211,204,227,0.4), rgba(233, 228, 240, 0.2),rgba(233, 228, 240, 0.1)),url(${BG})`,
    paddingTop: "15rem",
    "@media screen and (max-width: 900px)": {
      paddingTop: "10rem",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 900px)": {
      flexDirection: "column",

      "& .bannerImage": {
        width: "50%",
        height: "50%",
      },
    },
  },
  text: {
    width: "100%",
  },
  heading: {
    fontWeight: "700",
    fontSize: "52px",
    width: "570px",
    paddingRight: "4rem",
    lineHeight: "61.5px",
    "@media screen and (max-width: 900px)": {
      width: "100%",
      fontSize: "40px",
      lineHeight: "51.5px",
      marginBottom: "2rem",
      paddingRight: "0",
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

  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    "@media screen and (max-width: 900px)": {
      marginTop: "5rem",
    },
  },

  bannerImage: {
    width: "100%",
    background: "#123456",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <section id="hero" className={classes.hero}>
      <Container className={classes.container} style={{ display: "flex" }}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <h2 className={classes.heading}>
              Your favourite restaurants and takeaways, delivered to you.
            </h2>

            <br />

            <p className={classes.subheading}>
              Get notified when we launch. Enjoy{" "}
              <span className={classes.focus}>
                free delivery and many other discounts
              </span>{" "}
              exclusive for first users.
            </p>
          </Box>

          <Box style={{ marginTop: "2.75rem" }}>
            <Form
              style={{
                boxShadow: "0 4px 20px -2px #e9e9e9",
              }}
              message="Notify me"
            />
          </Box>
        </Box>

        <Box className={classes.imgBox}>
          <img
            src={BannerImg}
            className={classes.bannerImage}
            alt="phone mockup"
          />

          {/* <Animation /> */}
        </Box>
      </Container>
    </section>
  );
};

export default Hero;
