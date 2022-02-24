import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Section from "./partials/Section";
import Animation from "../ui/Animation";

import Delivery from "../../assets/animation/delivery_guy.json";
import AppUser from "../../assets/animation/app_user.json";
import Restaurant from "../../assets/animation/restaurant_owner.json";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",

    "@media screen and (max-width: 900px)": {
      flexDirection: "column",
      marginBottom: "5rem",
      textAlign: "center",
    },
  },
  item2: {
    "@media screen and (max-width: 900px)": {
      flexDirection: "column-reverse",
    },
  },
  text: {
    width: "45%",
    paddingLeft: "2rem",
    "@media screen and (max-width: 900px)": {
      width: "85%",
      paddingLeft: "0",
      marginTop: "1.75rem",
    },
    "& h5": {
      fontWeight: "600",
      fontSize: "24px",
      marginBottom: "20px",
    },
  },
  animation: {
    width: "460px",
  },
}));

const GetInvolved = () => {
  const classes = useStyles();
  return (
    <Section id="work" title="Let's do it together">
      <Box className={classes.content}>
        <Box className={classes.item}>
          <Box className={classes.animation}>
            <Animation content={Delivery} />
          </Box>

          <Box className={classes.text}>
            <h5>Become a rider</h5>

            <p style={{ fontSize: "18px" }}>
              Be your own boss, with full freedom to organise your work hours,
              delivering when, how, and where you want.
            </p>
          </Box>
        </Box>

        <Box className={`${classes.item} ${classes.item2}`}>
          <Box className={classes.text}>
            <h5>Become a patner</h5>

            <p style={{ fontSize: "18px" }}>
              Get insightful ideas on what your customers want. Reach more
              customers and grow your business.
            </p>
          </Box>

          <Box className={classes.animation}>
            <Animation content={Restaurant} />
          </Box>
        </Box>

        <Box className={classes.item}>
          <Box className={classes.animation}>
            <Animation content={AppUser} />
          </Box>

          <Box className={classes.text}>
            <h5>Try the app</h5>

            <p style={{ fontSize: "18px" }}>
              Get the food you want from the restaurant you love, personalised
              food recommendations based on your preference, all at the tap of a
              button.
            </p>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default GetInvolved;
