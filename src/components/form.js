//----Loading library----//
import { useState } from "react";
import StepTwo from "./stepTwo";

const Form = (props) => {
  //----states creation----(one state by field)//
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spy, setSpy] = useState(false);
  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Vos deux mots de passe ne sont pas identique!");
    } else {
      if (spy === true) {
        setSpy(false);
      } else {
        setSpy(true);
      }
    }
  };

  return (
    <div>
      <div className={spy === false ? "active" : "inactive"}>
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
          <input className="valid-bt" type="submit" value="Register" />
        </form>
      </div>
      <div className={spy === true ? "active" : "inactive"}>
        <StepTwo
          connector={spy}
          username={username}
          email={email}
          password={password}
        />
      </div>
    </div>
  );
};
export default Form;
