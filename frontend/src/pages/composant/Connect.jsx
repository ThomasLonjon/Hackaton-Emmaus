import React, { useState } from "react";
import axios from "axios";
import "./connect.scss";

function Connect({ setOpenLogin, setLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = import.meta.env.VITE_BACKEND_URL;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`${url}/users/login`, {
  //       email,
  //       password,
  //     })
  //     .then((result) => {
  //       localStorage.setItem("user", result.data);
  //       localStorage.setItem("logged", true);

  //       const logged = localStorage.getItem("logged");
  //       console.log(logged);
  //     });
  // };

  return (
    <>
      <div className="Connect-login">
        <div className="login">
          <form className="form-login">
            <h3 className="connection">Se connecter</h3>
            <label>
              <p>Identifiant : </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <p>Mot de passe :</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button
                type="submit"
                className="sub-button"
                onClick={() => {
                  setOpenLogin(false);
                  setLogged(true);
                }}
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Connect;
