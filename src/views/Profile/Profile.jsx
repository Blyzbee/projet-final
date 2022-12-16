import { useContext, useEffect } from "react";
import UserDataContext from "../../contexts/UserContext";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

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
        <div className="profile">
          <h2>Page de profil</h2>
        </div>
      </>
    );
};

export default Profile;
