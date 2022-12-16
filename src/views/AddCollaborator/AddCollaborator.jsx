import Header from "../../components/Header/Header";
import { addUser } from "../../services/axios";

const AddCollaborator = () => {
  return (
    <>
      <Header />
      <div className="add-collaborator">
        <h2>Ajouter un collaborateur</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addUser();
          }}
        ></form>
      </div>
    </>
  );
};

export default AddCollaborator;
