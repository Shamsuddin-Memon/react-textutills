import NavBar from "./Components/NavBar";
import TextBar from "./Components/TextBar";
import "./App.css";
import { useState } from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";

function App() {
  const [Mode, setMode] = useState("light");
  const [label, setLabel] = useState("dark");
  const [alert, setAlert] = useState(Object);
  const [GMode, setGMode] = useState("light");
  const [Glabel, setGLabel] = useState("Green");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3d424a";
      alertfn("Dark mode has been enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertfn("Dark mode has been disabled ", "success");
    }
  };

  let alertfn = (message: any, type: any) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(String);
    }, 2000);
  };

  return (
    <>
      <NavBar title="TextUtills" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <TextBar
                  heading="Enter text to analyze Bellow"
                  mode={Mode}
                  toggleMode={toggleMode}
                />
              }
            />
            <Route path="/About" element={<About />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
