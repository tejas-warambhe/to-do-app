import "./App.css";
import Home from "./components/Home";
import MyTasks from "./components/MyTasks";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [todos, setTodos] = useState([]);
  const [curState, setState] = useState("");
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#181818";
      showAlert("Dark Mode enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
    }
    console.log(alert);
  };

  return (
    <>
      <Router>
        <Navbar mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                curState={curState}
                mode={darkMode}
                setState={setState}
                todos={todos}
              />
            }
          />
          <Route
            exact
            path="/MyTasks"
            element={
              <MyTasks
                mode={darkMode}
                showAlert={showAlert}
                todos={todos}
                setTodos={setTodos}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
