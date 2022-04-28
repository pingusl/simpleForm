//----Loading State----//
import { useState } from "react";
//----Loading CSS -----/
import "./App.css";

//----Import Components----//
import Header from "./components/header";
import Form from "./components/form";
import StepTwo from "./components/stepTwo";
import Footer from "./components/footer";
function App(props) {
  //----states creation----(one state by field)//
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [spy, setSpy] = useState(false);

  //----Actions on button Click----//
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Formulaire envoyé!`);
  };
  //----Form creation----//
  return (
    <div className="App">
      <Header />
      <Form connector={spy} />
      <StepTwo
        connector={spy}
        username={props.username}
        email={props.email}
        password={props.password}
      />
      <input
        className="valid-bt"
        type="submit"
        value={spy === true ? "Register" : "Edit your information"}
        onClick={(event) => {
          spy === true ? setSpy(false) : setSpy(true);
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
