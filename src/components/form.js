//----Loading library----//
import { useState } from "react";

const Form = () => {
  //----states creation----(one state by field)//
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spy, setSpy] = useState(false);

  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Passage dans fonction HandleSubmit");
    console.log(`line 16 spy= ${spy}`);
    //alert("Formulaire envoyé!");
    //----Remise a vide du formulaire----//
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <input
        placeholder="email"
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
      />
      <input
        placeholder="password"
        type="text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
      />

      <input
        placeholder="confirmPassword"
        type="text"
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
        value={confirmPassword}
        className={spy === true ? "inactive" : "active"}
      />
      <input
        className="valid-bt"
        type="submit"
        value="Register"
        onClick={(event) => {
          spy === true ? setSpy(false) : setSpy(true);
        }}
      />
    </form>
  );
};
export default Form;
