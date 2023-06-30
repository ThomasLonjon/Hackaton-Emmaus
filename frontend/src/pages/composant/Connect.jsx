import React, { useState } from "react";
import api from "../../services/api";
import "./connect.scss";
import { useEffect } from "react";
import useStore from "../../store";

function Connect({setOpenLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_BACKEND_URL;

  const login = (email, password) => {
    return api.post("http://localhost:8000/users/login", { email, password });
  };


  const { auth, setAuth } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      setAuth({ user: result.data, isLogged: true });
      setOpenLogin(false)
    } catch (error) {
      setError("email ou mot de passe incorrect");
    }
  };

  return (
    <>
      <div className="Connect-login">
        <div className="login">
          <form className="form-login" onSubmit={handleSubmit}>
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
              <button type="submit" className="sub-button">
                Valider
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Connect;
