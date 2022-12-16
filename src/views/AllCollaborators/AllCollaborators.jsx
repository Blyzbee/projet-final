import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollaboratorCard from "../../components/CollaboratorCard/CollaboratorCard";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../contexts/UserContext";
import { getAllUsers } from "../../services/axios";

const AllCollaborators = () => {
  const { userData, loading } = useContext(UserDataContext);
  const navigate = useNavigate();

  const [collaborators, setCollaborators] = useState(null);
  const [searchBy, setSearchBy] = useState("name");
  const [searchByText, setSearchByText] = useState("");
  const [category, setCategory] = useState("");

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
          <div className="filter">
            <input
              type="text"
              name="searchByText"
              value={searchByText}
              onChange={(e) => setSearchByText(e.target.value.toLowerCase())}
            />
            <div>
              Rechercher par:{" "}
              <select
                name="searchBy"
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="location">Localisation</option>
              </select>
            </div>
            <div>
              Catégorie:{" "}
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">- Aucune -</option>
                <option value="Marketing">Marketing</option>
                <option value="Technique">Technique</option>
                <option value="Client">Client</option>
              </select>
            </div>
          </div>
          {collaborators &&
            collaborators
              // FILTER BY SEARCH NAME/LOCATION
              .filter((collaborator) => {
                if (!searchByText) return collaborator;
                if (searchBy === "name") {
                  if (
                    collaborator.firstname
                      .toLowerCase()
                      .includes(searchByText) ||
                    collaborator.lastname.toLowerCase().includes(searchByText)
                  )
                    return collaborator;
                } else if (searchBy === "location") {
                  if (collaborator.city.toLowerCase().includes(searchByText))
                    return collaborator;
                }
              })
              // FILTER BY CATEGORY
              .filter((collaborator) => {
                if (!category) return collaborator;
                if (collaborator.service === category) return collaborator;
              })
              // SORT BY INDEX IF SERCH_BY_TEXT
              .sort((a, b) => {
                if (!searchByText) return;
                if (searchBy === "name") {
                  const afullname = a.firstname + " " + a.lastname;
                  const bfullname = b.firstname + " " + b.lastname;
                  return (
                    afullname.toLowerCase().indexOf(searchByText) -
                    bfullname.toLowerCase().indexOf(searchByText)
                  );
                } else if (searchBy === "location") {
                  return (
                    a.city.toLowerCase().indexOf(searchByText) -
                    b.city.toLowerCase().indexOf(searchByText)
                  );
                }
              })
              // MAP ALL USERS RESULT
              .map((collaborator) => (
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
