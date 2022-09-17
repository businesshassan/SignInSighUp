import React, { useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIslogin] = useState(true);

  const switchHandler = (e) => {
    setIslogin((prevState) => !prevState);
  };

  return (
    <section className={classes.hero}>
      <p>{isLogin ? "LoginPage" : "signUppage"}</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password"></input>
        <div>
          <button type="submit">{isLogin ? "Login" : "Sign in"}</button>
        </div>
        <button onClick={switchHandler} type="button">
          {isLogin ? "click for sigup page" : "click for login page"}
        </button>
      </form>
    </section>
  );
};

export default AuthForm;
