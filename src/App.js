import React, { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle"
import {ThemeContext} from "./provider/ThemeProvider"
function App() {
  const {darkMode}=useContext(ThemeContext);
  return (
    <div style={{backgroundColor:darkMode?"#222":"white",color:darkMode&&"white"}}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
