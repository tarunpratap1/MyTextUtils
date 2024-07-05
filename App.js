// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Translator from './components/Translate';
// import Translate from './components/Translate';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';
import Translate from "./components/Translate";

function App(props) {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState()
  const [textnav, setTextnav] = useState("Enable DarkMode")
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type
    })
    setTimeout(() => {
      setAlert(false)
    }, 2200);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setTextnav("Enable LightMode")
      setMode("dark")
      showAlert("Dark Mode Has Been Enabled", "success")
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
    }
    else {
      showAlert("Light Mode Has Been Enabled", "success")
      setMode("light")
      setTextnav("Enable DarkMode")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }

  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="MyTextUtils" aboutText="About Us" mode={mode} hed={textnav} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Try MyTextUtils - Word Analyzer, Word Counter, Character Counter" />}>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/translate" element={<Translate mode={mode}/>}>
          </Route>
        </Routes>
        <div className="container mt-5">
        </div>
      </BrowserRouter>
      <Footer mode={mode}/>
      {/* <Translate/> */}
    </>
  );
}

export default App;
