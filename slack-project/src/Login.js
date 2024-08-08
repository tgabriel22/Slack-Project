import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
// import { AlternateEmail } from "@mui/icons-material";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="/Slack_icon_19.svg" alt="" />
        <h1>Sign In to TG/Dev's Project</h1>
        <p>TG/Dev's Project.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
