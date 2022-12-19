import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../contexts/UserContext";
import { deleteUser } from "../../services/axios";
import { birthdateParsing } from "../../services/utils";
import "./collaboratorCard.css";
import editimg from "../../assets/icons/edit.svg";
import deleteimg from "../../assets/icons/delete.svg";

const CollaboratorCard = ({ userInfos, fetchAllUsers }) => {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <div className="collaborator-card">
      <div className="img-container">
        <img
          src={userInfos.photo}
          alt={`${userInfos.firstname} ${userInfos.lastname}`}
        />
      </div>
      <div>
        <span className="service">{userInfos.service}</span>
        <h3>
          {userInfos.firstname} {userInfos.lastname}
        </h3>
        <span className="age">{birthdateParsing(userInfos.birthdate)} ans</span>
        <span>
          {userInfos.city}, {userInfos.country}
        </span>
        <a href={`mailto:${userInfos.email}`}>{userInfos.email}</a>
        <a href={`tel:${userInfos.phone}`}>{userInfos.phone}</a>
        <span>Anniversaire: {userInfos.birthdate}</span>
      </div>
      {userData?.isAdmin && (
        <div className="buttons-container">
          <button
            onClick={() => navigate(`/edit-collaborator/${userInfos.id}`)}
          >
            <img src={editimg} alt="Modifier l'utilisateur" />
          </button>
          <button
            onClick={() => deleteUser(userInfos.id).then(() => fetchAllUsers())}
          >
            <img src={deleteimg} alt="Supprimer l'utilisateur" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CollaboratorCard;
