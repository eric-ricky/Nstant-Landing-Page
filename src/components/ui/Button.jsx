import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    border: "0",
    padding: "14px 24px",
    cursor: "pointer",
    color: "#fff",
    background: "#e7e247",
    background: "#000",
    borderRadius: "52px",
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },
}));

const Button = ({ title, className, ...props }) => {
  const classes = useStyles();
  return (
    <button className={`${classes.button} ${className || ""}`} {...props}>
      {title}
    </button>
  );
};

export default Button;
