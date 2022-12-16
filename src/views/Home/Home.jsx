import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollaboratorCard from "../../components/CollaboratorCard/CollaboratorCard";
import Header from "../../components/Header/Header";
import UserDataContext from "../../contexts/UserContext";
import { getRandomUser } from "../../services/Axios";

const Home = () => {
  const navigate = useNavigate();
  const { loading, userData } = useContext(UserDataContext);

  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    if (!loading && !userData) navigate("/");
    if (!loading && userData) {
      getRandomUser().then((res) => setRandomUser(res.data));
    }
  }, [userData, loading]);

  return (
    <>
      <Header />
      <div className="home">
        {/* DISPLAY A RANDOM USER */}
        {randomUser && (
          <>
            <h2>Dites bonjour à {randomUser?.firstname}</h2>
            <CollaboratorCard userInfos={randomUser} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
