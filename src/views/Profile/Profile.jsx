import { useContext, useEffect } from "react";
import UserDataContext from "../../contexts/UserContext";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import AddEditUserForm from "../../components/AddEditUserForm/AddEditUserForm";

const Profile = () => {
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
        <div className="profil">
          <h2>Modifier mon profil</h2>
          <AddEditUserForm edit />
        </div>
      </>
    );
};

export default Profile;
