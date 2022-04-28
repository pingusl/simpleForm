//----Loading library----//
import { useState } from "react";
import Field from "./field";
const Form = (props) => {
  //----states creation----(one state by field)//
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();

    //----Remise a vide du formulaire----//
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };
  return (
    <div className={props.connector === true ? "active" : "inactive"}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            placeholder="username"
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            placeholder="email"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            name="password"
            placeholder="password"
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            placeholder="confirm your password"
            type="text"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
