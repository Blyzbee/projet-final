import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserDataContext from "../../contexts/UserContext";
import { logout } from "../../services/axios";

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  if (userData) {
    return (
      <div className="header">
        <NavLink to="/home">Accueil</NavLink>
        <NavLink to="/all-collaborators">Liste</NavLink>
        {userData.isAdmin && (
          <NavLink to="/add-collaborator">Ajouter un collaborateur</NavLink>
        )}
        <NavLink to="/profile">Profil</NavLink>
        <NavLink
          to="/"
          onClick={() => {
            logout();
            setUserData(null);
          }}
        >
          Déconnexion
        </NavLink>
      </div>
    );
  }
};

export default Header;
