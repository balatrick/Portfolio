import React from "react";
import Header from "./components/Header/Header";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import SkillContainer from "./components/SkillContainer/SkillContainer"
import ProjectContainer from "./components/ProjectContainer/ProjectContainer"
import "./App.css"
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import ContactContainer from "./components/Contact/ContactContainer";



function App() {
  return (
    <>
    <Header/>
   <Topcontainer />
   <SkillContainer/>
   <ProjectContainer/>
   <ExperienceContainer/>
   <ContactContainer/>
   </>
  );
}

export default App;
