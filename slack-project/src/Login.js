import React from "react";
import "./Login.css";
import { Button } from "@mui/material";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src="/Slack_icon_19.svg" alt="" />
        <h1>Sign In to TG/Dev's Project</h1>
        <p>TG/Dev's Project.com</p>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
