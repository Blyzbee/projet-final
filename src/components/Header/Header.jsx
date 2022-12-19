import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserDataContext from "../../contexts/UserContext";
import { logout } from "../../services/axios";
import "./header.css";
import addUserimg from "../../assets/icons/person_add.svg";
import accountimg from "../../assets/icons/account_circle.svg";
import logoutimg from "../../assets/icons/logout.svg";
import groupimg from "../../assets/icons/group.svg";
import homeimg from "../../assets/icons/home.svg";

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  if (userData) {
    return (
      <>
        <div className="header">
          <NavLink to="/home">
            <img src={homeimg} alt="Accueil" />
            Accueil
          </NavLink>
          <NavLink to="/all-collaborators">
            <img src={groupimg} alt="Liste de tous les collaborateurs" />
            Collaborateurs
          </NavLink>
          {userData.isAdmin && (
            <NavLink to="/add-collaborator">
              <img src={addUserimg} alt="Ajouter un utilisateur" />
              Nouveau Collaborateur
            </NavLink>
          )}
          <NavLink to="/profile">
            <img src={accountimg} alt="Profil" />
            Profil
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              logout();
              setUserData(null);
            }}
          >
            <img src={logoutimg} alt="Déconnexion" />
            Déconnexion
          </NavLink>
        </div>
        <hr />
      </>
    );
  }
};

export default Header;
