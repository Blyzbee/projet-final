import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../contexts/UserContext";
import { login } from "../../services/axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { userData, loading, setUserData } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && userData) navigate("/home");
  }, [userData, loading]);

  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="login">
        <h2>Page de login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password)
              .then((res) => setUserData(res.data.user))
              .catch((err) => {
                if (err.response.data.error) setError(err.response.data.error);
                else setError("Erreur inconnue");
              });
          }}
        >
          <label htmlFor="email">Rentrez votre email</label>
          <input
            type="email"
            name="email"
            placeholder="exemple@exemple.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Rentrez votre mot de passe</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className="error">{error}</span>}
          <button className="button">Connexion</button>
        </form>
      </div>
    );
};

export default Login;
