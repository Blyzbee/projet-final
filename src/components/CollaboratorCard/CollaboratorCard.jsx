import { useContext } from "react";
import UserDataContext from "../../contexts/UserContext";
import { birthdateParsing } from "../../services/utils";
import "./collaboratorCard.css";

const CollaboratorCard = ({ userInfos }) => {
  const { userData } = useContext(UserDataContext);

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
          <button className="button">Editer</button>
          <button className="button warning">Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default CollaboratorCard;
