//----Loading CSS -----/
import "./App.css";

//----Import Components----//
import Header from "./components/header";
import Form from "./components/form";

import Footer from "./components/footer";
function App(props) {
  return (
    <div className="App">
      <Header />
      <Form />

      <Footer />
    </div>
  );
}

export default App;
