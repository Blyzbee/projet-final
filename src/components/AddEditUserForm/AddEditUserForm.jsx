import { useState, useEffect } from "react";
import { addUser, editUser, getUser } from "../../services/axios";
import "./addEditUserForm.css";

const AddEditUserForm = ({ edit }) => {
  const userId = window.location.pathname.split("/")[2];
  const [gender, setGender] = useState("male");
  const [service, setService] = useState("Marketing");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (edit)
      getUser(userId).then((res) => {
        setGender(res.data.gender);
        setService(res.data.service);
        setLastname(res.data.lastname);
        setFirstname(res.data.firstname);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setBirthdate(res.data.birthdate);
        setCity(res.data.city);
        setCountry(res.data.country);
        setPhoto(res.data.photo);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !gender ||
      !service ||
      !lastname ||
      !firstname ||
      !email ||
      !password ||
      !phone ||
      !birthdate ||
      !city ||
      !country
    ) {
      setErrorMsg("Erreur, veuillez remplir tous les champs requis");
      return;
    }

    setErrorMsg("");

    if (edit) {
      editUser(
        userId,
        gender,
        service,
        lastname,
        firstname,
        email,
        password,
        phone,
        birthdate,
        city,
        country,
        photo,
        isAdmin
      );
    } else {
      addUser(
        gender,
        service,
        lastname,
        firstname,
        email,
        password,
        phone,
        birthdate,
        city,
        country,
        photo,
        isAdmin
      );
    }
  };

  return (
    <div className="add-edit-user-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="gender">Civilité:</label>
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          <option value="other">Autre</option>
        </select>
        <label htmlFor="service">Catégorie:</label>
        <select
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="Marketing">Marketing</option>
          <option value="Technique">Technique</option>
          <option value="Client">Client</option>
        </select>
        <label htmlFor="lastname">Nom:</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="SMITH"
        />
        <label htmlFor="firstname">Prénom:</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="John"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john.smith@email.com"
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="(min. 8 caractères)"
        />
        <label htmlFor="phone">Téléphone:</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0789012345"
        />
        <label htmlFor="birthdate">Date de naissance:</label>
        <input
          type="date"
          name="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <label htmlFor="city">Ville:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Paris"
        />
        <label htmlFor="country">Pays:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="France"
        />
        <label htmlFor="photo">URL de la photo (optionnel):</label>
        <input
          type="text"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="https://"
        />
        <label htmlFor="isAdmin">Administrateur</label>
        <input
          type="checkbox"
          name="isAdmin"
          value={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        {errorMsg && <span className="errorMsg">{errorMsg}</span>}
        <button type="submit" className="button">
          {edit ? "MODIFIER" : "AJOUTER"}
        </button>
      </form>
    </div>
  );
};

export default AddEditUserForm;
