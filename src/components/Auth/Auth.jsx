import React, { useRef } from "react";
import styles from "./Auth.module.scss";
import CSSModules from "react-css-modules";

import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    try {
      const sendRequest = async () => {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: emailInput,
              password: passwordInput,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        dispatch(authActions.loginHandler(data.idToken));
        if (!response.ok) {
          throw new Error(data.error.message);
        }
      };
      await sendRequest();
    } catch (err) {
      return alert(err);
    }

    navigate("/resources");
  };

  return (
    <div styleName="auth-wrapper">
      <div styleName="auth">
        <h2>Login</h2>
        <form onSubmit={submitLoginHandler}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="password" placeholder="password" ref={passwordRef} />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default CSSModules(Auth, styles);
