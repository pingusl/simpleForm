//----Loading CSS -----/
import { useState } from "react";
import "./App.css";

//----Import Components----//
import Header from "./components/header";
import Form from "./components/form";
import StepTwo from "./components/stepTwo";
import Footer from "./components/footer";

function App(props) {
  //----Create states----//
  //create username state
  const [username, setUsername] = useState("");
  //create mail state
  const [email, setEmail] = useState("");
  //create password state
  const [password, setPassword] = useState("");
  //create confirm password stat
  const [confirmPass, setConfirmPass] = useState("");
  //create conditionning stat
  const [tiggerSwitch, setTiggerSwitch] = useState(false);
  //----Create variable for conditionning----//
  // const form = <h1>Form</h1>;
  // const stepTwo = <h1>stepTwo</h1>;
  //----Action on Event----//
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (password !== confirmPass) {
  //     alert("Vos deux mots de passe ne sont pas identique!");
  //   }
  // };
  //----Control Form and StepTwo----(conditionning)//

  return (
    <div className="App">
      <Header />
      {tiggerSwitch === false ? (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPass={confirmPass}
          setConfirmPass={setConfirmPass}
          tiggerSwitch={tiggerSwitch}
          setTiggerSwitch={setTiggerSwitch}
        />
      ) : (
        <StepTwo
          username={username}
          email={email}
          password={password}
          tiggerSwitch={tiggerSwitch}
          setTiggerSwitch={setTiggerSwitch}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
