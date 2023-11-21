import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css"; 
// import "./LoginPage.css";

export default function LoginPage(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUser(inputValue);
  };

  return (
    <div className="row login-container">
      <h3 className="login-title">Please enter your username</h3>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row input-group">
          <div className="input-field col s12">
            <input
              id="username"
              type="text"
              className="validate"
              onChange={handleChange}
            />
            <label htmlFor="username" className="label">
              Username:
            </label>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn login-button">
          Log In
        </button>
      </form>
    </div>
  );
}
