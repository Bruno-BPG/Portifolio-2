import { NavBar } from "./components/NavBar";
import { InitialPage } from "./components/InitialBar";
import { SkillsBar } from "./components/SkillsBar";
import { AboutMeBar } from "./components/AboutMeBar";


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <InitialPage></InitialPage>
      <SkillsBar></SkillsBar>
      <AboutMeBar></AboutMeBar>

      </header>
    </div>
  );
}

export default App;
