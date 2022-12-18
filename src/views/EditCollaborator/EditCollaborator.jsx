import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddEditUserForm from "../../components/AddEditUserForm/AddEditUserForm";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../contexts/UserContext";

const EditCollaborator = () => {
  const { userData, loading } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !userData) navigate("/");
  }, [loading, userData]);

  if (loading) return <Loading />;
  else
    return (
      <>
        <Header />
        <div className="edit-collaborator">
          <h2>Modifier un collaborateur</h2>
          <AddEditUserForm edit />
        </div>
      </>
    );
};

export default EditCollaborator;
