import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";

import { Button } from "../ui/index";

import MobileDrawer from "./partials/MobileDrawer";

export const menuItems = [
  {
    path: "hero",
    label: "Home",
  },
  {
    path: "steps",
    label: "How it works",
  },
  {
    path: "work",
    label: "Let's work together",
  },
  {
    path: "start",
    label: "Get started",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#4d5061",
    fontWeight: "body",
    width: "100%",
    padding: "1.5rem .75rem",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      position: "fixed",
      background: "#fff",
      paddingTop: "15px",
      paddingBottom: "15px",
      color: "#000000",

      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
    },
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: "'Lobster', cursive",
    letterSpacing: "10px",
    color: "#ff1700",
    zIndex: "100",
    cursor: "pointer",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    "& a": {
      fontSize: "16px",
      fontWeight: "normal",
      padding: "0 .75rem",
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "#ff1700",

        transition: "color 0.15s ease",
      },
      "&.active": {
        color: "#ff1700",
      },
    },
  },
  btnStyle: {
    color: "#fff",
    fontSize: "16px",
    background: "#ff1700",
    border: "1px solid #ff1700",
    transition: ".4s ease",
    "&:hover": {
      background: "transparent",
      color: "#000",
    },
  },

  mobileHandler: {
    marginLeft: "1rem",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
}));

const Header = ({ className }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${className} ${classes.header}`}>
      <Container style={{ display: "flex" }} className={classes.container}>
        <h1 className={classes.logo}>Nstant</h1>
        <Box className={classes.nav}>
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className={classes.link}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button className={classes.btnStyle} title="Get Notified" />

          <Box
            className={classes.mobileHandler}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IoMdMenu size="26px" />
          </Box>
        </Box>

        <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </header>
  );
};

export default Header;
