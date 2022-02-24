import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";

import { menuItems } from "../Header";

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: "absolute",
    top: 0,
    left: "-50%",
    height: "100vh",
    width: "70%",
    background: "#fff",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    transition: "all 0.25s",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    padding: "100px 30px 40px 30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& a": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#123456",
      padding: "18px 0",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "#ff1700",
      },
      "&.active": {
        color: "#ff1700",
      },
    },
  },
}));

const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const classes = useStyles();

  return (
    <Box className={classes.drawer} style={{ left: `${isOpen ? 0 : "-100%"}` }}>
      <Box className={classes.content}>
        <Box className={classes.close} onClick={() => setIsOpen(false)}>
          <IoMdClose size="24px" color="#000" />
        </Box>

        <Box className={classes.menu}>
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileDrawer;
