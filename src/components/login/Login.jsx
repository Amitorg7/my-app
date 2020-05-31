import React, { Fragment, useState } from "react";
import { fauth } from "../../config/firebaseConfig";
import "./login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    fauth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem("loginInfo", true);
        props.history.push("/submit");
      })
      .catch((e) => {
        alert("something wrong");
        // warn(e.message);
      });
  };

  return (
    <Fragment>
      <section id="login">
        <div className="container">
          <div className="content-box">
            <div className="box">
              <div className="textbox">
                <i className="fas fa-user"></i>
                <input
                  value={email}
                  onChange={handleInputEmail}
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div className="textbox">
                <i className="fas fa-lock"></i>
                <input
                  value={password}
                  onChange={handleInputPassword}
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
              <button onClick={onSubmit} type="button" className="btn">
                SIGNIN
              </button>
              <Link to="/registration">
                <button type="button" className="btn">
                  SIGNUP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
