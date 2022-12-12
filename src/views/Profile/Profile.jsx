import { useContext } from "react";
import UserDataContext from "../../contexts/UserContext";
import Loading from "../../components/Loading/Loading";
import { redirect } from "react-router-dom";

const Profile = () => {
  const { userData, loading } = useContext(UserDataContext);

  if (userData) {
    return (
      <div className="profile">
        <h2>Page de profil</h2>
      </div>
    );
  } else if (loading) {
    <Loading />;
  } else {
    redirect("/");
  }
};

export default Profile;
