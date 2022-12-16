import "./collaboratorCard.css";

const CollaboratorCard = ({ userInfos }) => {
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
        <span className="age">20 ans</span>
        <span>
          {userInfos.city}, {userInfos.country}
        </span>
        <a href={`mailto:${userInfos.email}`}>{userInfos.email}</a>
        <a href={`tel:${userInfos.phone}`}>{userInfos.phone}</a>
        <span>Anniversaire: {userInfos.birthdate}</span>
      </div>
    </div>
  );
};

export default CollaboratorCard;
