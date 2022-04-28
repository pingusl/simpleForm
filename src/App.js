//----Loading CSS -----/
import "./App.css";
//----Loading library----//
import { useState } from "react";

function App() {
  //----states creation----(one state by field)//
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Passage dans fonction HandleSubmit");
    // alert("Formulaire envoyé!");
    //----Remise a vide du formulaire----//
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };
  //----Form creation----//
  return (
    <div className="App">
      <form action={handleSubmit}>
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
        />
        <input className="valid-bt" type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
