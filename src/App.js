//----Loading CSS -----/
import "./App.css";
//----Loading library----//
import { useState } from "react";
//----Import Components----//
import Form from "./components/form";

function App() {
  //----states creation----(one state by field)//
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Passage dans fonction HandleSubmit");
    alert("Formulaire envoyé!");
    //----Remise a vide du formulaire----//
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };
  //----Form creation----//
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
