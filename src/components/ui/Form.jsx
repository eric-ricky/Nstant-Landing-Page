import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
// import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";
import { db } from "../../firebase/config";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

import * as EmailValidator from "email-validator";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "450px",
    borderRadius: "2px",
    background: "#fff",
    paddingRight: "0px",
    "@media screen and (max-width: 900px)": {
      paddingLeft: "2px",
      width: "100%",
    },
  },
  input: {
    paddingLeft: "25px",
    width: "330px",
    height: "45px",
    padding: "20px 5px",
    border: 0,
    outline: "none",
    fontSize: "16px",
    "&:selected": {
      background: "green",
    },
    "@media screen and (max-width: 900px)": {
      paddingLeft: "8px",
    },
  },
  button: {
    border: "0",
    padding: "0",
    cursor: "pointer",
    height: "45px",
    width: "250px",
    fontWeight: "600",
    fontSize: "18px",
    color: "#fff",
    background: "#000",
    borderRadius: "2px",
    "&:hover": {
      background: "#ff1700",
      transition: "color 0.15s ease",
    },
    "@media screen and (max-width: 900px)": {
      width: "400px",
      fontSize: "14px",
    },
  },
}));

const Form = ({ message, style }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const form = useRef();
  const emailRef = useRef();

  const classes = useStyles();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const email = emailRef.current.value;

    if (!email && !EmailValidator.validate(email)) {
      setError("No e-mail was entered");
      setLoading(false);
      return;
    }

    // const docRef = await addDoc(collection(db, "contact"), {
    //   email,
    //   timestamp: serverTimestamp(),
    // });

    //   emailjs
    //     .sendForm(
    //       "service_2cubvtk",
    //       "template_irr6rtw",
    //       form.current,
    //       "user_M1oevbwwWtUWAgveEsw0c"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );

    setLoading(false);
    setError(false);
    // setSuccess("Message sent successfully");
    emailRef.current.value = "";
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={submitHandler}
        className={classes.form}
        style={style}
      >
        <input
          className={classes.input}
          type="email"
          name="email"
          placeholder="Enter your email.."
          ref={emailRef}
          onClick={() => setError(false)}
        />
        <button className={classes.button} type="submit">
          {loading ? "Sending..." : message}
        </button>
      </form>
      {error && (
        <p style={{ color: "red", paddingLeft: "25px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      {/* {!success && (
        <p style={{ color: "green", paddingLeft: "25px", marginTop: "5px" }}>
          {success}
        </p>
      )} */}
    </>
  );
};

export default Form;
