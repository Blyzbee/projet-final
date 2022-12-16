import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollaboratorCard from "../../components/CollaboratorCard/CollaboratorCard";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../contexts/UserContext";
import { getAllUsers } from "../../services/Axios";

const AllCollaborators = () => {
  const { userData, loading } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [collaborators, setCollaborators] = useState(null);

  useEffect(() => {
    if (!loading && !userData) navigate("/");
    if (!loading && userData) {
      getAllUsers()
        .then((res) => setCollaborators(res.data))
        .catch((err) => console.log(err));
    }
  }, [loading, userData]);

  if (loading) return <Loading />;
  else
    return (
      <>
        <Header />
        <div className="allCollaborators">
          <h2>Liste des collaborateurs</h2>
          {collaborators &&
            collaborators?.map((collaborator) => (
              <CollaboratorCard
                key={collaborator.id}
                userInfos={collaborator}
              />
            ))}
        </div>
      </>
    );
};

export default AllCollaborators;
