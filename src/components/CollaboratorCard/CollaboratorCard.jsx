import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../contexts/UserContext";
import { deleteUser } from "../../services/axios";
import { birthdateParsing } from "../../services/utils";
import "./collaboratorCard.css";

const CollaboratorCard = ({ userInfos, fetchAllUsers }) => {
  const { userData } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <div className="collaborator-card">
      <img
        src={userInfos.photo}
        alt={`${userInfos.firstname} ${userInfos.lastname}`}
      />
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
            className="button"
            onClick={() => navigate(`/edit-collaborator/${userInfos.id}`)}
          >
            Editer
          </button>
          <button
            className="button warning"
            onClick={() => deleteUser(userInfos.id).then(() => fetchAllUsers())}
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default CollaboratorCard;
